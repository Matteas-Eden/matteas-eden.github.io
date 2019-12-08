# Requirements
There were numerous requirements laid out by the client, and these are as follows:
* To be able to authenticate their login to a central login server
* To be able to see other active users
* To be able to generate a public/private key pair
* To be able to receive and send broadcasts to and from a central login server as well as other clients
* To perform regular network health checks on other clients through ping checking

Anzen satisfies all of these requirements.

# Meeting the client's requirements
The user is presented the following screen, within which they may enter their username and password.

![Login Screen](https://github.com/uoa-cs302/2019-Python-mede607/blob/master/src/resources/LoginScreenshot.png)

After entering their details, the webserver will create a basic authorisation header using that username/password combination and send this to the central login server in order to generate an API key. This key is unique to this instance of the user logging in, and is then used in all subsequent requests to other servers. This minimises the ability of malicious agents on the network to masquerade as the user, since they won't have this unique API key.<br>
The next step is to retrieve the user's private data, which contains the user's private key as well as the user's preferences. The private data is specially encrypted with a password only known to the server, so even though it is stored on the login server and could be intercepted during transmission, a malicious agent would have a difficult time decrypting it. If private data does not exist for the user, or if it's in an unrecognised format, then new keys and private data will be generated for the user. This helps to prevent tampering with the user's private data, as the webserver will not attempt to load corrupt data. Throughout the login process, there are calls to the login server in order to validate the details of the user, so that if at any time there has been a misstep or tampering, the process is halted in order to protect the user's account.

Once a user has logged in, they are able to access the main screen of Anzen.

![Main Screen](https://github.com/uoa-cs302/2019-Python-mede607/blob/DELIVERABLES/src/resources/MainpageScreenshot.png)

Without having to navigate to other screens, the user will be able to identify who the currently active users are, view all received broadcasts and send a broadcast to other users.
# Additional features

The webapp has very attractive UI, which is important as this contributes to the overall experience of the user. UI elements are also responsive, so that the user does not get impatient while waiting for the site to load.
By using the accordion on the left hand side of the main page, the user can see their list of friends and blocked words, which is good as it informs the user about their selected preferences.