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
