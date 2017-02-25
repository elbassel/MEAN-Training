
function testConstLet(){
  {
    let a = 1;
    const b = 1;
  }
  console.log(a); // ReferenceError
  console.log("b = " + b); // ReferenceError

}

testConstLet();
