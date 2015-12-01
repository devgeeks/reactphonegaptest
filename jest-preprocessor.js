/* eslint no-var:0 */
var babelJest = require('babel-jest');

module.exports = {
  process: function process(src, filename) {
    if (filename.match(/less/)) {
      return '';
    }
    return babelJest.process(src, filename);
  },
};
