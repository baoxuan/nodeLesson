var server = require('./server');
var router = require('./router');
var requestHanlder = require('./requestHandlers');

var handle = {}
handle['/'] = requestHanlder.start;
handle['/start'] = requestHanlder.start;
handle['/upload'] = requestHanlder.upload;

server.start(router.route, handle);