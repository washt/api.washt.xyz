'use strict';

const Promise = require('bluebird');
const fetch = require('node-fetch');
const config = require('../config.js');

const activity = () => {

  return Promise.all([
    fetch("https://api.github.com/users/washt/events"),
    fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22norfolk%2Cva%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"),
    fetch("https://news.ycombinator.com/threads?id=washt")
		])
	  .then(data => {
			return data
		})
    .catch(console.log.bind(console))
}

module.exports = activity;
