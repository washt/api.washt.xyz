'use strict';

const Promise = require('bluebird');
const fetch = require('node-fetch');
const config = require('../config.js');

let activity = (function () {

  var github =  fetch("https://api.github.com/users/washt/events")
	                .then(data => {return data})
  var weather = fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22norfolk%2Cva%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
	                .then(data => {return data})
	var hn =  fetch("https://news.ycombinator.com/threads?id=washt")
	                .then(data => {return data})

	Promise.all([github,weather,hn])
	  .then((data) => {
			return data
		})
    .catch(err => {
			throw err
		})
})()

module.exports = activity;
