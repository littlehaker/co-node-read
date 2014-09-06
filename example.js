var co = require('co');

var read = require('./index');

co(function * () {

  var article = yield read('http://news.163.com/14/0905/18/A5DA5S6N00014SEH.html');

  // Main Article.
  console.log(article.content);

  // Title
  console.log(article.title);

  // HTML 
  console.log(article.html);

  // DOM
  console.log(article.dom);

})();