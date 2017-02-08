var path = require('path');
var dirVars = require('../dir.js');

module.exports = {
  configFile: path.resolve(dirVars.staticRootDir, './.eslintrc'),
  failOnWarning: true,
  failOnError: true,
  cache: true,
};
