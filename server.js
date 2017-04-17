var http = require('http');
var url = require('url');

function start(route, handle){
	function onRequest(requset, response){
		var pathname = url.parse(requset.url).pathname;
		console.log('Request for '+ pathname + ' received.');

		route(handle, pathname, response);
	}

	http.createServer(onRequest).listen(8888);
	console.log('Server has started!');
}

exports.start = start;
