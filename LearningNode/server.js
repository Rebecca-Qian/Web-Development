// requires http module that ships with Node.js
// makes it accessible through variable http
var http = require("http");
var url = require("url");

// createServer is one of the functions http module offers
// returns an object
// http.createServer(function(request, response) {
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }).listen(8888); // object has listen method, takes numeric value that's HTTP server port #

// request and response are objects
// function start() {
// 	function onRequest(request, response) {
// 		console.log("Request received.");
// 		// when request is received, use response.writeHead method to send HTTP status 200, content-type in HTTP response header
// 		response.writeHead(200, {"Content-Type": "text/plain"});
// 		// response.write function sends text "Hello World" in HTTP response body
// 		response.write("Hello World");
// 		// finishes response
// 		response.end();
// 		//not using request obj yet for details of request
// 	}

// 	http.createServer(onRequest).listen(8888);

// 	console.log("Server has started.");
// }

// passes the route function
// function start(route) {
// 	function onRequest(request, response) {
// 		var pathname = url.parse(request.url).pathname;
// 		console.log("Request for " + pathname + " received.");
		
// 		// prints a message
// 		route(pathname);

// 		response.writeHead(200, {"Content-Type": "text/plain"});
// 		response.write("Hello World");
// 		response.end();
// 	}

// 	http.createServer(onRequest).listen(8888);
// 	console.log("Server has started.");
// }

function start(route, handle) {
	function onRequest(request, response) {
		//var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);

		// expect encoding of received data to be UTF-8
		//request.setEncoding("utf8");

		// Node serves code POST data in small chunks, callbacks called upon certain events
		// data event is when a new chunk of code arrives
		// end event is when all chunks have been received
		// tell node which functions to call back to when these events occur by adding listeners to request obj
		// that's passed to onRequest callback whenever HTTP request received
		// add event listener for when new chunk of code arrives
		// request.addlistener("data", function(postdatachunk) {
		// 	// fills new postdata var when chunk of post data arrives
		// 	postdata += postdatachunk;
		// 	//console.log for debugging
		// 	console.log("received post data chunk'" + 
		// 		postdatachunk + "'.");
		// });

		// // add event listener for when all chunks of code received
		// request.addlistener("end", function() {
		// 	// router only called when all post data received
		// 	// pass post data into router to use in request handlers
		// 	route(handle, pathname, response, postdata);
		// });

		// don't expect return value from route() function
		// pass third parameter response object
		// removed any response method calls from onRequest() handler
		// expect route to take care of response
		//route(handle, pathname, response);
	}

		// response.writeHead(200, {"Content-Type": "text/plain"});

		// response.write(content);
		// response.end();

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;



