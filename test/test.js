var test = require("tap").test;
var testBundle = require("./sample/bundle");
var a = require("./sample/dir/a.js");
var b = require("./sample/dir/b.js");

test("glob-loader", function (t) {
  t.similar(testBundle, {
    "a": a,
    "b": b,
  });
  t.end()
});
