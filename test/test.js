(function () {
  var assert = require('assert');
  var nx = require('next-js-core2');
  var NxFile = require('../src/next-file');

  describe('NxFile.methods', function () {
    it('get extname:', function () {
      var winPath = "C:\\projects\\test.patdf\\blah.dll";
      var unixPath = '/root/astest/test.path/sdfsdf.subpath/test.txt';

      var rs1 = nx.File.extname(winPath);
      var rs2 = nx.File.extname(unixPath);

      // console.log(rs1, rs2);

      assert.equal(rs1, 'dll');
      assert.equal(rs2, 'txt');

    });
  });


}());
