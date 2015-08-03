'use strict';

module.exports = function(source) {
  var ns = (this.options && this.options.ns) || '.bs3';
  var result = ns + ' {\n' + source + '\n}';
  return result;
};

