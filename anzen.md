# Anzen

**Project description:**

Anzen is a webapp designed for messaging and interacting with other users on a hybrid peer-to-peer network that supports the latest versions of Chrome and Firefox. Anzen runs on a CherryPy server written in Python3, with a database backend supported using SQLite for Python. The front end uses Jinja for templating the HTML and Ajax for managing the background tasks in Javascript. 

"Anzen" is the Japanese word for security, chosen due to the project's major focus on privacy, consent, and security. When using the site, a user can be ensured that all of their messages are encrypted and that incoming messages have not been tampered with. 

The UI is designed to be both eye-catching and minimalistic, with visual hints to guide the user on how to interact with the webapp so that the use of the site feels as natural and as comfortable as possible.

## Requirements
There were numerous requirements laid out by the client, and these are as follows:
* To be able to authenticate their login to a central login server
* To be able to see other active users
* To be able to generate a public/private key pair
* To be able to receive and send broadcasts to and from a central login server as well as other clients
* To perform regular network health checks on other clients through ping checking

Anzen satisfies all of these requirements.

#### Meeting the client's requirements
The user is presented the following screen, within which they may enter their username and password.

![Login Screen](/images/anzen-login-screenshot.png)

After entering their details, the webserver will create a basic authorisation header using that username/password combination and send this to the central login server in order to generate an API key. This key is unique to this instance of the user logging in, and is then used in all subsequent requests to other servers. This minimises the ability of malicious agents on the network to masquerade as the user, since they won't have this unique API key.<br>
The next step is to retrieve the user's private data, which contains the user's private key as well as the user's preferences. The private data is specially encrypted with a password only known to the server, so even though it is stored on the login server and could be intercepted during transmission, a malicious agent would have a difficult time decrypting it. If private data does not exist for the user, or if it's in an unrecognised format, then new keys and private data will be generated for the user. This helps to prevent tampering with the user's private data, as the webserver will not attempt to load corrupt data. Throughout the login process, there are calls to the login server in order to validate the details of the user, so that if at any time there has been a misstep or tampering, the process is halted in order to protect the user's account.

Once a user has logged in, they are able to access the main screen of Anzen.

![Main Screen](/images/dummy-thumbnail.jpg)

Without having to navigate to other screens, the user will be able to identify who the currently active users are, view all received broadcasts and send a broadcast to other users.

### Additional features

The webapp has very attractive UI, which is important as this contributes to the overall experience of the user. UI elements are also responsive, so that the user does not get impatient while waiting for the site to load.
By using the accordion on the left hand side of the main page, the user can see their list of friends and blocked words, which is good as it informs the user about their selected preferences.

## System Implementation

### Python Backend
As discussed in the introduction, Anzen runs on a CherryPy server. Due to the nature of how CherryPy servers work, the server operates by calling multiple exposed endpoints at various points throughout execution, each of which is defined within a class mounted on a separate path of the webapp. This is such that:

* "MainApp" is mounted on '/'
* "API_receive" is mounted on '/api'
* "API_send" is mounted on '/out'

**Main App**

This class serves the actual webpages, written using a combination of HTML, CSS and JavaScript. The endpoints defined in Main App also handle the login flow, such as "login", "signin" and "signout". The first page that greets the user is served to them via the "login" endpoint. From here, they are redirected to "signin", which calls a function to authorise their login credentials. As part of this authorisation process, this function also retrieves their private data from the central server, as well as reporting them online and generating both a login server record and an API key for use during the rest of that user's session. If this process fails at any point, then the user is left at the login page facing an error, which informs them that their username or password was incorrect. After the authorisation process completes successfully, the user is redirected to "index", and the main page is served to them, at which point they may navigate between "index" and "messages". If the user attempts to access a URL that does not exist, then they will be redirected to an endpoint "error", which serves up a simple error page. When the user wishes to signout, they can click on a button and be redirected to the "signout" endpoint, which proceeds to expire the session and report them offline to the central server.

**API Receive**

This class serves all incoming API requests by other client servers, such as "rx_broadcast", "rx_privatemessage" and "list_users". For both of the messaging endpoints, the format of the payload is checked and if it proves to be incorrect, is rejected. Signatures are also checked on these endpoints to ensure maximum security.

**API Send**

This class serves all outgoing API requests made by Anzen on other client servers, such as "broadcast", "privatemessage" and "ping_check". It gets called by the Javascript on the frontend.

### Ajax Frontend w/ Jinja templating

In order to make full use of the Jinja templating, some of the HTML pages served inherit from each other. More specifically, the pages for displaying broadcasts ("home.html") and private messages ("messages.html") inherit from a base template ("main.html"). This has been done so that the top navigation bar, the profile on the left side and the user list on the right side remain consistent across both pages.<br>
In addition to inheritance, Jinja also plays a part in generating the message log on the pages for broadcasts and private messages. Making use of template variables, conditionals and iterative statements, a list of messages is passed in to each page and a specifically styled block is created containing the appropriate information, such as the message content, the user who sent it and the time since it was sent.<br>
In order to continuously report, update the user list and ping check other clients, Ajax is used to regularly call these endpoints at different intervals appropriate for each API call. The Javascript also handles the hand-off of user input into forms in the HTML to endpoints on the CherryPy server for such things as broadcasts and private messaging.

## Peer-to-Peer Networking

Peer-to-Peer networking is often regarded as the most secure form of networking. So it then comes as no surprise that in a project defined by security, it was the first networking method that was considered. Fundamentally, peer-to-peer networking is built upon the philosophy that no single client can really be trusted and that it is only by having the a collective user base check and verify each other that trust between clients can be established. Given the social media-esque context in which the project takes place, it makes inherent sense that clients would be trying to connect to each other, rather than relying on a central server. In peer-to-peer networking, a hive of users make up the network, where the health of the network is dependent upon the group efforts of those users and as such, the network is not susceptible to a single point of failure like a centralised model would be. Due to this, a completely decentralised network would have been more than appropriate for this application.

## Security of the implementation

### Strengths
There are many strengths to the current implementation, namely in regards to the public/private key encryption. The private key is never sent over plain text and so will always remain somewhat secure, depending on the method chosen by a client server to encrypt a user's private data. Additionally, the login server record is a good way to ensure that a given username has been verified by the login server since it allows client server's to place an almost implicit trust in the user's requests. Adding to this, the use of signatures throughout the various API calls means that every client server can hold every other server accountable through constant verification.

### Weaknesses

Even if API keys are generated and used, there is still a requirement to send at least one header to the central server that will contain both username and password in plain text. As a result of this, it could be argued that every other security measure put in place is rendered ineffective, as a malicious agent watching the network carefully would be able to acquire everything they need to impersonate a user.<br>
Furthermore, despite attempts to decentralise the network model, there is a hard reliance on the central login server to remain both fully functional and trustworthy, as it is required to authenticate each user during login. Without it, the network falls apart, as no user would be able to login to access the services of any given client server.

### Weaknesses of Anzen

Anzen verifies signatures, but does not always verify the login server record. This could potentially lead to allowing a malicious agent to call endpoints on the client server.<br>
Additionally, Anzen does not implement rate limiting, which means it is inherently susceptible to slowdown by malicious agents overburdening the server with excess API calls, or in fact the server could experience slowdown merely as a result of large numbers of other servers ping checking it.

### Weaknesses of the login server

The login server runs on Raspberry Pi, which means it is susceptible to DDOS attacks. In fact, during the course of this project it crashed more than once under normal use conditions, proving that the hardware is a liability. Although there appeared to be some rate limiting for API calls implemented, the central server could still crash if enough malicious agents were to throw enough data at it, such as with a botnet. <br>
Another weakness of the login server is that in the event it is hacked, which considering the amount of exploits available for Raspbian is a likely possibility, all user passwords are stored in a database and can very easily be extracted.

## Developing the protocol

Development of the protocol was done in groups, and the submission of each group's protocol doc had some very tight scheduling. In addition to the stress placed upon students by this scheduling, there was also a general lack of direction felt by many students. While there were a handful of students who were familiar with servers and network models, the majority had never encountered this topic before and so had to rely on this handful of students in order to make any sense of what went on. This was not helped by a lack of guidance from the teaching staff during the limited number of lectures.<br>
Despite all of this, the end result and the protocol that was created was understandable and, for the most part, relatively straight forward to implement.

## Suitability of tools

The selection of Python as the language for programming the backend was a well-made decision, as Python is very accessible compared to other, more strongly-typed languages such as Java. Additionally, the plethora of suitable libraries available only adds to the ease with which the client server was able to be created. CherryPy, in particular, is very straight forward to use and has extensive documentation available which can only be considered a positive. However, given the use of Jinja, it would have made more sense to use Flask, which includes and is designed to work with Jinja.<br>
There weren't any tools specified for the creation of the frontend of the web server, and I think this was only to the benefit of the project as it allowed complete freedom in design, which is rare. It provided an opportunity for those who were already familiar with frameworks such as Angular and React to flex those skills, while it also meant that those who weren't necessarily all too familiar with web development were able to pick and choose only that which they were comfortable with using.

## Suggested improvements for future development

The transmission of username and password in plain text within the Basic Authorisation Header is large oversight in terms of security and should definitely be removed in future. It would far too easily allow a man in the middle attack to occur and given the requirements of the client this should not be allowed to happen.