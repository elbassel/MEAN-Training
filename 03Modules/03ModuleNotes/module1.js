var module2 = require('./module2.js');

exports.sayHelloMod1 = function(){
  module2.sayHelloMod2();
  console.log("Hello from module 1");
}
