

function testConstLet(){
  var num;
  num
  {
    var a = 1;
    const b = 1;
  }
  console.log(a); // ReferenceError
  console.log("b = " + b); // ReferenceError
    
}

testConstLet();

1 == true;
1 === true;
