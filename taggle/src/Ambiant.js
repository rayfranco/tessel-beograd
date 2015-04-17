var EventEmitter = require('events').EventEmitter;
var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var Ambiant = function(port, settings) {
	this.port = port;
	this.ambiant = ambientlib.use(tessel.port[this.port]);

	this.init();
};

Ambiant.prototype.proxy = function(fn, ctx) {
	return fn.call(ctx);
};

Ambiant.prototype.init = function() {
	this.ambiant.on('ready', this._onReady.bind(this));
	this.ambiant.on('sound-trigger', this._onSoundTrigger.bind(this));
	this.ambiant.on('light-trigger', this._onLightTrigger.bind(this));
	this.ambiant.on('error', this._onError.bind(this));
};

Ambiant.prototype.__proto__ = EventEmitter.prototype;

Ambiant.prototype._onReady = function(){
	// setInterval( function () {
	//     ambient.getLightLevel( function(err, ldata) {
	//       if (err) throw err;
	//       ambient.getSoundLevel( function(err, sdata) {
	//         if (err) throw err;
	//         console.log("Light level:", ldata.toFixed(8), " ", "Sound Level:", sdata.toFixed(8));
	//     });
	// })}, 500);
	// 

	this.ambiant.setSoundTrigger(0.1);
	// ambient.setLightTrigger(0.5);
};

Ambiant.prototype._onSoundTrigger = function(){
	this.emit('shout');

    this.ambiant.clearSoundTrigger();

    setTimeout(function () {
        this.ambiant.setSoundTrigger(0.1);
    }.bind(this),1500);
};

Ambiant.prototype._onLightTrigger = function(){
};

Ambiant.prototype._onError = function(){
	console.log('Error :(');
};

module.exports = Ambiant;