var calculator = require('./calculator');

var args = process.argv;

//the application has no parameters
if(args.length < 5){

  console.log("Please provide the data, for example: 3 + 9");

  process.exit(0);

}

var num1 = parseInt(args[2]);
var operation = args[3];
var num2 = parseInt(args[4]);

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


process.exit(0);
