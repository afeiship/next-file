(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DOT = '.';

  var NxFile = nx.declare('nx.File', {
    statics: {
      basename: function () {
      },
      extname: function (inPath) {
        var index = inPath.lastIndexOf(DOT);
        return inPath.slice(index + 1);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxFile;
  }

}());
