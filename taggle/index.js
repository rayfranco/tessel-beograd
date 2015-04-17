var Ambiant = require('./src/Ambiant');

var ambiant = new Ambiant('A');

ambiant.on('shout',function(){
  console.log('TAGGLE');
})

// var sound = Sound('B');