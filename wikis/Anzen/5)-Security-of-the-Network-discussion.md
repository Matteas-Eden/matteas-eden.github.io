# Security of the implementation

## Strengths
There are many strengths to the current implementation, namely in regards to the public/private key encryption. The private key is never sent over plain text and so will always remain somewhat secure, depending on the method chosen by a client server to encrypt a user's private data. Additionally, the login server record is a good way to ensure that a given username has been verified by the login server since it allows client server's to place an almost implicit trust in the user's requests. Adding to this, the use of signatures throughout the various API calls means that every client server can hold every other server accountable through constant verification.

## Weaknesses

Even if API keys are generated and used, there is still a requirement to send at least one header to the central server that will contain both username and password in plain text. As a result of this, it could be argued that every other security measure put in place is rendered ineffective, as a malicious agent watching the network carefully would be able to acquire everything they need to impersonate a user.<br>
Furthermore, despite attempts to decentralise the network model, there is a hard reliance on the central login server to remain both fully functional and trustworthy, as it is required to authenticate each user during login. Without it, the network falls apart, as no user would be able to login to access the services of any given client server.

# Weaknesses of Anzen

Anzen verifies signatures, but does not always verify the login server record. This could potentially lead to allowing a malicious agent to call endpoints on the client server.<br>
Additionally, Anzen does not implement rate limiting, which means it is inherently susceptible to slowdown by malicious agents overburdening the server with excess API calls, or in fact the server could experience slowdown merely as a result of large numbers of other servers ping checking it.

# Weaknesses of the login server

The login server runs on Raspberry Pi, which means it is susceptible to DDOS attacks. In fact, during the course of this project it crashed more than once under normal use conditions, proving that the hardware is a liability. Although there appeared to be some rate limiting for API calls implemented, the central server could still crash if enough malicious agents were to throw enough data at it, such as with a botnet. <br>
Another weakness of the login server is that in the event it is hacked, which considering the amount of exploits available for Raspbian is a likely possibility, all user passwords are stored in a database and can very easily be extracted.