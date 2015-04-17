var tessel = require('tessel');
var fs = require('fs');
var path = require('path');
var audio = require('audio-vs1053b');

var audioFile = 'taggle.mp3';

var Sound = function(port, settings) {
	this.port = port;

	this.init();
};

Sound.prototype.init = function() {
	this.audio = audio.use(tessel.port[this.port]);
	this.sound = fs.readFileSync(path.join('assets',audioFile));

	this.audio.on('ready', this._onReady.bind(this));
	this.audio.on('error', this._onError.bind(this));
};

Sound.prototype._onReady = function(){
	this.audio.setVolume(.8, function(){
		this.ready = true;
	}.bind(this));
};

Sound.prototype._onError = function(err){
	console.log('error :(', err);
};


Sound.prototype.taggle = function() {
	if (!this.ready) {
		console.log('Not ready yet');
		return;
	}
	setTimeout(function(){
		this.audio.play(this.sound, this._onError.bind(this));
	}.bind(this), 0);
};

module.exports = Sound;

