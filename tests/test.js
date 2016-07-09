'use strict';

const config = require('../config');

var assert = require('chai').assert;
var fetch = require('node-fetch');

describe('Handler', function() {
  describe('Home', function() {
    it('should return a non-empty object', function() {
      fetch(config.baseurl + config.port + "/")
			  .then(res => {
          assert.notEqual(Object.keys(res).length,0);
				})
    });
    it('should return an object size of 3', function() {
      fetch(config.baseurl + config.port + "/")
			  .then(res => {
					console.log(res);
          assert.equal(Object.keys(res).length,3);
				})
    });
  });
  describe('Contact', function() {
    it('should return a non-empty object', function() {
      fetch(config.baseurl + config.port + "/contact")
			  .then(res => {
          assert.notEqual(Object.keys(res).length,0);
				})
    });
  });
  describe('About', function() {
    it('should return a non-empty object', function() {
      fetch(config.baseurl + config.port + "/about")
			  .then(res => {
          assert.notEqual(Object.keys(res).length,0);
				})
    });
  });
  describe('Social', function() {
    it('should return a non-empty object', function() {
      fetch(config.baseurl + config.port + "/social")
			  .then(res => {
          assert.notEqual(Object.keys(res).length,0);
				})
    });
  });
});
