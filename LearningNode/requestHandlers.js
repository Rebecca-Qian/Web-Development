//var exec = require("child_process").exec;
var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start(response) {
	console.log("Request handler 'start' was called.");

	// HTML for textarea form
	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" ' +
		'content="text/html; charset=UTF-8" />' + 
		'</head>' +
		'<body>' +
		//textarea form
		'<form action="/upload" enctype="multipart/form-data" ' + 'method="post">' +
		//textarea
		'<input type="file" name="upload" multiple="multiple">' +
		// submit button
		'<input type="submit" value="Upload file" />' +
		'</form>' +
		'</body>' +
		'</html>';

		response.writeHead(200, {"Content-Type": "text/html"});
	 	response.write(body);
	 	response.end();

	//var content = "empty";

	// exec executes a shell command within Node.js
	// use to get list of all files in current directory
	// display list in browser of user requesting /start URL
	// exec("ls -lah", function(error, stdout, stderr) {
	// 	//content = stdout;

	// 	// response from within anonymous exec callback
	// 	response.writeHead(200, {"Content-Type": "text/plain"});
	// 	response.write(stdout);
	// 	response.end();
	// });

	//return content;
}

// receives POST data
// use in request handler
function upload(response, request) {
	// replies with hello upload
	// uses response object
	console.log("Request handler 'upload' was called.");

	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files) {
		console.log("parsing done");

		fs.rename(files.upload.path, "/tmp/test.png", function(error) {
			if (error) {
				fs.unlink("/tmp/test.png");
				fs.rename(files.upload.path, "/tmp/test.png");
			}
		});
		response.writeHead(200, {"Content-Type": "text/html"});
		// passing on complete body of POST request
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
}

function show(response) {
	console.log("Request handler 'show' was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("/tmp/test.png").pipe(response);
}

// module methods
// wiring request handlers into router
exports.start = start;
exports.upload = upload;
exports.show = show;

// function start() {
//  console.log("Request handler 'start' was called.");

//  function sleep(milliSeconds) {
//  var startTime = new Date().getTime();
//  while (new Date().getTime() < startTime + milliSeconds);
//  }

//  sleep(10000);
//  return "Hello Start";
//  }

//  function upload() {
//  console.log("Request handler 'upload' was called.");
//  return "Hello Upload";
//  }

//  exports.start = start;
//  exports.upload = upload;

