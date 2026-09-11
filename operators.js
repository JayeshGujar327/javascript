// arithmetic operators//
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log("Sum: " + sum);
let difference = num1 - num2;
console.log("Difference: " + difference);
let product = num1 * num2;
console.log("Product: " + product);
let quotient = num1 / num2;
console.log("Quotient: " + quotient);


/// Assignment Operators//
let x = 10;
x += 5; // equivalent to x = x + 5
console.log("Addition Assignment: " + x);
x -= 3; // equivalent to x = x - 3
console.log("Subtraction Assignment: " + x);
x *= 2; // equivalent to x = x * 2                      
console.log("Multiplication Assignment: " + x);
x /= 4; // equivalent to x = x / 4
console.log("Division Assignment: " + x);
x %= 3; // equivalent to x = x % 3
console.log("Modulus Assignment: " + x);

// Comparison Operators//
let a = 10;
let b = 18;
console.log("Equal to: " + (a == b));
console.log("Not equal to: " + (a != b));
console.log("Greater than: " + (a > b));
console.log("Less than: " + (a < b));
console.log("Greater than or equal to: " + (a >= b));
console.log("Less than or equal to: " + (a <= b));

// Logical Operators//
let p = true;
let q= false;
console.log("Logical AND: " + (p && q));
console.log("Logical OR: " + (p || q));
console.log("Logical NOT: " + (!p));

// Ternary Operator//
let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);