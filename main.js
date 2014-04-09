var problem = prompt('What would you like to do?  (A)dd, (s)ubtract, (m)ultiply, (d)ivide, (p)ower, (r)oot, (f)actorial, or (q)uit the calculator?')
problem = problem.toLowerCase();

while (problem !== 'q') {
  switch(problem) {
  case 'a':
    var x = prompt('Enter your first value.');
    var y = prompt('Enter your second value.');
    x = parseInt(x);
    y = parseInt(y);
    var a = add(x,y);
    console.log("The sum of " + x + " and " + y + " is " + a + ".");
    break;
  case 's':
    var x = prompt('Enter your first value.');
    var y = prompt('Enter your second value.');
    x = parseInt(x);
    y = parseInt(y);
    var s = subtract(x,y);
    console.log("The difference of " + x + " and " + y + " is " + s + ".");
    break;
  case 'm':
    var x = prompt('Enter your first value.');
    var y = prompt('Enter your second value.');
    x = parseInt(x);
    y = parseInt(y);
    var m = multiply(x,y);
    console.log("The product of " + x + " and " + y + " is " + m + ".");
    break;
  case 'd':
    var x = prompt('Enter your first value.');
    var y = prompt('Enter your second value.');
    x = parseInt(x);
    y = parseInt(y);
    var d = divide(x,y);
    console.log("The dividend of " + x + " and " + y + " is " + d + ".");
    break;
  case 'p':
    var x = prompt('Enter your first value.');
    var y = prompt('Enter your second value.');
    x = parseInt(x);
    y = parseInt(y);
    var p = exponent(x,y);
    console.log(x + " to the power of " + y + " is " + p + ".");
    break;
  case 'r':
    var x = prompt('Enter your value.');
    x = parseInt(x);
    var r = squareRoot(x);
    console.log("The square root of " + x + " is " + r + ".");
    break;
  case 'f':
    var x = prompt('Enter your value.');
    x = parseInt(x);
    var f = factorial(x);
    console.log("The factorial of " + x + " is " + f + ".");
    break;
  default:
      console.log('That was not a valid option.')
  }

  problem = prompt('What would you like to do?  (A)dd, (s)ubtract, (m)ultiply, (d)ivide, (p)ower, (r)oot, (f)actorial, or (q)uit the calculator?')
  problem = problem.toLowerCase();
}

function add(x,y) {
  return x + y;
}
function subtract(x,y) {
  return x - y;
}
function multiply(x,y){
  return x * y;
}
function divide(x,y) {
  return x / y;
}
function exponent(x,y) {
  return Math.pow(x,y);
}
function squareRoot(x){
  return Math.sqrt(x);
}
function factorial(x) {
  for (var i = x; i > 0 ; i--) {
    var num = x;
    num = num * i;
  }
  return num;
}
