'use strict';

const hapi = require('hapi');
const home = require('./handlers/home.js');
const about = require('./handlers/about.js');
const contact = require('./handlers/contact.js');
const social = require('./handlers/social.js');
const activity = require('./handlers/activity.js');

const server = new hapi.Server();
server.connection({ port: process.env.PORT });

server.route({
  method: 'GET',
	path: '/',
	handler: function (request, reply) {
		console.log(request.info);
	  reply(home);
  }
});

server.route({
  method: 'GET',
	path: '/about',
	handler: function (request, reply) {
		console.log(request.info);
	  reply(about);
  }
});

server.route({
  method: 'GET',
	path: '/contact',
	handler: function (request, reply) {
		console.log(request.info);
	  reply(contact);
  }
});

server.route({
  method: 'GET',
	path: '/social',
	handler: function (request, reply) {
		console.log(request.info);
	  reply(social);
  }
});

server.route({
  method: 'GET',
	path: '/activity',
	handler: function (request, reply) {
		console.log(request.info);
	  activity()
	    .then(data => {
        reply(data)
			})
  }
});

server.start(err => {
	if (err) console.log(err);
});
