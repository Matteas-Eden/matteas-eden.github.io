# System Implementation

## Python Backend
As discussed in the introduction, Anzen runs on a CherryPy server. Due to the nature of how CherryPy servers work, the server operates by calling multiple exposed endpoints at various points throughout execution, each of which is defined within a class mounted on a separate path of the webapp. This is such that:

* "MainApp" is mounted on '/'
* "API_receive" is mounted on '/api'
* "API_send" is mounted on '/out'

### Main App
This class serves the actual webpages, written using a combination of HTML, CSS and JavaScript. The endpoints defined in Main App also handle the login flow, such as "login", "signin" and "signout". The first page that greets the user is served to them via the "login" endpoint. From here, they are redirected to "signin", which calls a function to authorise their login credentials. As part of this authorisation process, this function also retrieves their private data from the central server, as well as reporting them online and generating both a login server record and an API key for use during the rest of that user's session. If this process fails at any point, then the user is left at the login page facing an error, which informs them that their username or password was incorrect. After the authorisation process completes successfully, the user is redirected to "index", and the main page is served to them, at which point they may navigate between "index" and "messages". If the user attempts to access a URL that does not exist, then they will be redirected to an endpoint "error", which serves up a simple error page. When the user wishes to signout, they can click on a button and be redirected to the "signout" endpoint, which proceeds to expire the session and report them offline to the central server.

### API Receive

This class serves all incoming API requests by other client servers, such as "rx_broadcast", "rx_privatemessage" and "list_users". For both of the messaging endpoints, the format of the payload is checked and if it proves to be incorrect, is rejected. Signatures are also checked on these endpoints to ensure maximum security.

### API Send

This class serves all outgoing API requests made by Anzen on other client servers, such as "broadcast", "privatemessage" and "ping_check". It gets called by the Javascript on the frontend.

## Ajax Frontend w/ Jinja templating

In order to make full use of the Jinja templating, some of the HTML pages served inherit from each other. More specifically, the pages for displaying broadcasts ("home.html") and private messages ("messages.html") inherit from a base template ("main.html"). This has been done so that the top navigation bar, the profile on the left side and the user list on the right side remain consistent across both pages.<br>
In addition to inheritance, Jinja also plays a part in generating the message log on the pages for broadcasts and private messages. Making use of template variables, conditionals and iterative statements, a list of messages is passed in to each page and a specifically styled block is created containing the appropriate information, such as the message content, the user who sent it and the time since it was sent.<br>
In order to continuously report, update the user list and ping check other clients, Ajax is used to regularly call these endpoints at different intervals appropriate for each API call. The Javascript also handles the hand-off of user input into forms in the HTML to endpoints on the CherryPy server for such things as broadcasts and private messaging.