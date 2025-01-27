function foo(a,b){
  //Explicit type conversion using parseInt
  return parseInt(a) + parseInt(b);
}
console.log(foo(1, "1")); //This will result in 2

function foo2(a,b){
  //Explicit type conversion using Number
  return Number(a) + Number(b);
}
console.log(foo2(1, "1")); //This will also result in 2