var EventEmitter = require('events').EventEmitter;
var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['A']);

var emitter;

var Ambiant = function(port) {
	this.port = port;
};