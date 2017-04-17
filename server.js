var http = require('http');
var url = require('url');

function start(route, handle){
	function onRequest(requset, respond){
		var pathname = url.parse(requset.url).pathname;
		console.log('Request for '+ pathname + ' received.');

		respond.writeHead(200,{'Content-Type': "text/plain"});
		var content = route(handle, pathname);
		respond.write(content);
		respond.end()
	}

	http.createServer(onRequest).listen(8888);
	console.log('Server has started!');
}

exports.start = start;
