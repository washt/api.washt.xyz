'use strict';

var hapi = require('hapi');
var home = require('./handlers/home.js');

const server = new hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
	path: '/',
	handler: function (request, reply) {
	  reply(home);
  }
});

server.start(err => {
	if (err) console.log(err);
});
