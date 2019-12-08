# Developing the protocol

Development of the protocol was done in groups, and the submission of each group's protocol doc had some very tight scheduling. In addition to the stress placed upon students by this scheduling, there was also a general lack of direction felt by many students. While there were a handful of students who were familiar with servers and network models, the majority had never encountered this topic before and so had to rely on this handful of students in order to make any sense of what went on. This was not helped by a lack of guidance from the teaching staff during the limited number of lectures.<br>
Despite all of this, the end result and the protocol that was created was understandable and, for the most part, relatively straight forward to implement.

# Suitability of tools

The selection of Python as the language for programming the backend was a well-made decision, as Python is very accessible compared to other, more strongly-typed languages such as Java. Additionally, the plethora of suitable libraries available only adds to the ease with which the client server was able to be created. CherryPy, in particular, is very straight forward to use and has extensive documentation available which can only be considered a positive. However, given the use of Jinja, it would have made more sense to use Flask, which includes and is designed to work with Jinja.<br>
There weren't any tools specified for the creation of the frontend of the web server, and I think this was only to the benefit of the project as it allowed complete freedom in design, which is rare. It provided an opportunity for those who were already familiar with frameworks such as Angular and React to flex those skills, while it also meant that those who weren't necessarily all too familiar with web development were able to pick and choose only that which they were comfortable with using.

# Suggested improvements for future development

The transmission of username and password in plain text within the Basic Authorisation Header is large oversight in terms of security and should definitely be removed in future. It would far too easily allow a man in the middle attack to occur and given the requirements of the client this should not be allowed to happen.