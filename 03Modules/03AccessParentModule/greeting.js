var logger = module.parent.exports.logger;

exports.sayHello = function(name, greetingMessage){
  logger.log(name + " : " + greetingMessage);
  console.log("Hello from" + name);
}
