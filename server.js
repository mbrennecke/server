//Import/require http module

var http = require("http");

//define port
var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequestOne(request, response) {
	response.end("MMM Bacon");
}

function handleRequestTwo(request, response) {
	response.end("EWWW artichoke");
}

var server1 = http.createServer(handleRequestOne);
var server2 = http.createServer(handleRequestTwo);

server1.listen(PORTONE, function() {
		console.log("Server listening on : http://localhost:" + PORTONE);
	});
	
server2.listen(PORTTWO, function() {
		console.log("Server listening on : http://localhost:" + PORTTWO);
	});