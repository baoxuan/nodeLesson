function route(handle, pathname){
	console.log('About to route a request for '+ pathname);
	if(typeof handle[pathname] === 'function'){
		return handle[pathname]();
	}else{
		console.log('No request handle found for' + pathname);
		return '404 not found'
	}
}
exports.route = route;