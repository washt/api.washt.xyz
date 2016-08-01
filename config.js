'use strict';

const config = {
	baseurl: "http://api.washt.xyz/",
  port: process.env.PORT,
	sites: {
	"github": "https://api.github.com/users/washt/events",
  "weather": "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22norfolk%2Cva%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  "hn": "https://hacker-news.firebaseio.com/v0/user/washt.json?print=pretty"
	}
};

module.exports = config;
