'use strict';

var hapi = require('hapi');
var home = require('./handlers/home.js');
var about = require('./handlers/about.js');
var contact = require('./handlers/contact.js');
var social = require('./handlers/social.js');
var activity = require('./handlers/activity.js');

const server = new hapi.Server();
server.connection({ port: process.env.PORT });

server.route({
  method: 'GET',
	path: '/',
	handler: function (request, reply) {
	  reply(home);
  }
});

server.route({
  method: 'GET',
	path: '/about',
	handler: function (request, reply) {
	  reply(about);
  }
});

server.route({
  method: 'GET',
	path: '/contact',
	handler: function (request, reply) {
	  reply(contact);
  }
});

server.route({
  method: 'GET',
	path: '/social',
	handler: function (request, reply) {
	  reply(social);
  }
});

server.route({
  method: 'GET',
	path: '/activity',
	handler: function (request, reply) {
	  reply(activity);
  }
});

server.start(err => {
	if (err) console.log(err);
});
