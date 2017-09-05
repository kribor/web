var http = require("http");


http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'});

   //Resolve API server URL to env setting API_SERVER or use http://localhost:8081 by default
   apiServer = 'http://localhost:8081'   
   if (process.env.API_SERVER != null) {
      apiServer = process.env.API_SERVER
   }

   //Minimal web page that dynamically loads a message from an API server and puts it in the h1.
   response.end('<html><head><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script></head><body><h1 id="h1head">Sorry, no work.</h1><script>$.getJSON(\'' + apiServer + '\', function(data) { $("#h1head").text(data.message) });</script></body></html>');
}).listen(8082);

// Console will print the message
console.log('Server running at http://127.0.0.1:8082/');
