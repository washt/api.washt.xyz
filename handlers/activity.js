'use strict';

const Promise = require('bluebird');
const fetch = require('node-fetch');
const config = require('../config.js');


const activity = () => {
 let github = fetch("https://api.github.com/users/washt/events").then(data => data.json())

 let weather = fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22norfolk%2Cva%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys").then(data => data.json())

 let hn  = fetch("https://hacker-news.firebaseio.com/v0/user/washt.json?print=pretty")
             .then(data => data.json())

  return Promise.all([github,weather,hn])
	  .then(data => {
			return data
		})
    .catch(console.log.bind(console))
}

module.exports = activity;
