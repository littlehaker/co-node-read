var read = require('node-read');
var Q = require('q');

function _read(url, options) {
  var dfd = Q.defer();

  function cb(err, article, meta) {
    if (err) {
      dfd.reject(err);
    } else {
      dfd.resolve(article);
    }
  }

  if (options) {
    read(url, options, cb);
  } else {
    read(url, cb);
  }

  return dfd.promise;
}

module.exports = _read;