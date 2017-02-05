var calculator = require('./calculator');
var stdin = process.openStdin();
printMsg();
stdin.addListener("data", function(data) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()

    var operation = data.toString().trim();
    // console.log("jhgjg\t"+str);
    // console.log(data.toString().slice(0, -1);.length);
    if(operation === 'exit'){
      //the application has no parameters
        console.log("The user typed exit");

        process.exit(0);
    }

    calc(operation);
    printMsg();
  });


function printMsg(){
  console.log("Please enter operation, for example: 9 + 1 or 9 x 3 or type exit to turn the app down.");
}

var calc = function(data){
  var items = data.toString().split(' ');
  var num1 = parseInt(items[0]);
  var operation = items[1];
  var num2 = parseInt(items[2]);
  switch (operation) {
    case "+":
      console.log("The summation is: "+calculator.add(num1, num2));

      break;
    case "-":
      console.log("The subtractions is: "+calculator.subtract(num1, num2));

      break;
    case "x":
      console.log("The multiplication is: "+calculator.multiply(num1, num2));

      break;
    case "/":
      console.log("The devision is: "+calculator.devide(num1, num2));

      break;
    default:

  }

};
