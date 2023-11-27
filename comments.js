// Create a web server
// 1. Handle requests for /comments
// 2. Read the comments.json file
// 3. Respond with the contents of the file
// 4. Respond with a 500 error if an error occurs

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {

  // Read the comments.json file
  fs.readFile("comments.json", function(err, data) {
    // Respond with the contents of the file
    response.end(data);
  });

});

// Listen on port 8000, IP defaults to
