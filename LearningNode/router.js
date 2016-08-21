// takes a pathname
// only prints message
function route(handle, pathname, response, request) {
	console.log("About to route a request for " + pathname);

	// check if request handler for given pathname exists
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, request);
		// call according function start or upload
		//return handle[pathname]();
	} else {
		console.log("No request handler found for " + pathname);
		//return "404 not found";
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;