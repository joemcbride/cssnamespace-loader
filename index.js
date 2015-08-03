'use strict';

var loaderUtils = require('loader-utils');

module.exports = function(source) {
  var query = loaderUtils.parseQuery(this.query);
  var ns = '.bs3';

  if(query.ns) {
    ns = query.ns;
  }

  var result = ns + ' {\n' + source + '\n}';
  return result;
};

