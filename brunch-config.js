'use strict';

var fs = require('fs');

exports.config = {
  files: {
    javascripts: {
      joinTo: 'scripts/main.js'
    }
  },
  onCompile: function(generatedFiles) {
    fs.appendFile('public/scripts/main.js', '\n\nrequire(\'scripts/main\');');
  }
};
