'use strict';

const Promise = require('bluebird');
const fetch = require('node-fetch');
const config = require('../config.js');

const activity = () => {
  let github = fetch(config.sites.github).then(data => data.json())

  let weather = fetch(config.sites.weather).then(data => data.json())

  let hn  = fetch(config.sites.hn).then(data => data.json())

  return Promise.all([github,weather,hn])
	  .then(data => {
			return data
		})
    .catch(console.log.bind(console))
}

module.exports = activity;
