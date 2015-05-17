# Notes-API

Getting Started:
 - Download and Install Node JS.
	- https://nodejs.org/download/
 - Clone the GitHub Repository.
 - From the Command Line, Run the Node JS Server:
	- e.g: ..\GitHub\Notes-API>node server.js
 - By default the Note API runs on PORT 8080, but will use a PORT environment variable if found.
 
Commands:
 - GET:
	- All notes: GET /api/notes
		- curl -i -H "Accept: application/json" -X GET http://localhost:8080/api/notes 
	- Individual note: GET /api/notes/{id}
		- curl -i -H "Accept: application/json" -X GET http://localhost:8080/api/notes/1
	- Filter notes: GET /api/notes?search="Search%20Terms"
		- curl -i -H "Accept: application/json" -X GET http://localhost:8080/api/notes?search=Pay
		- curl -i -H "Accept: application/json" -X GET http://localhost:8080/api/notes?search="Oil%20Change"
 - POST:
	- Create a new note: POST /api/notes
		- curl -i -H "Content-Type: application/json" -X POST -d '{"body" : "Pick up milk!"}' http://localhost:8080/api/notes 
 - PUT:
	- Update an existing note: PUT /api/notes/{id}
		- curl -i -H "Content-Type: application/json" -X PUT -d '{"body" : "Pick up bread!"}' http://localhost:8080/api/notes/1
 - DELETE:
	- Delete an existing note: DELETE /api/notes/{id}
		- curl -X DELETE http://localhost:8080/api/notes/1 
 
 
Troubleshooting:
 - Trouble running "node server.js"
	- Ensure your Node installation is withing the PATH environment.
 - Invalid JSON when using cUrl:
	- Try using escaped double-quotes: 
		- curl -i -H "Content-Type: application/json" -X POST -d "{\"body\" : \"Pick up milk!\"}" http://localhost:8080/api/notes 