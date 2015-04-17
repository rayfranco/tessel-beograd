var tessel = require('tessel');

var Ambiant = require('./src/Ambiant');
var Sound = require('./src/Sound');

var ambientlib = require('ambient-attx4');

var ambiant = new Ambiant('A',{
  limit: 0.1
});
var sound = new Sound('B');

ambiant.on('shout',function(){
  sound.taggle();

  // Blink led
  // var timeout;
  // (function blink(value) {
  //   tessel.led[value ? 0 : 1].write(value);
  //   console.log('set to ', value);
  //   timeout = setTimeout(blink, 200, !value);
  // })(true);
  // setTimeout(function(){
  //   clearTimeout(timeout);
  // },1000);
});

// var sound = Sound('B');