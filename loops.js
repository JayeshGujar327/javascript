// for loop //
for ( i = 0; i<=10; i++)
{
    console.log(i);
}

// 2's table //
for ( i = 1; i<=10; i++)
{
    console.log("2 * " + i + " = " + 2*i);
}                       

// print even numbers from 1 to 100 //
for ( i=1; i<=100; i++)
    if ( i % 2 === 0){
        console.log(i);
    }

    // find sum of numbers from 1 to 100 //

    let sum = 0;
    for ( i = 1; i<=100; i++)
        sum= sum + i ;
    {
        console.log("sum :"+ sum)
    }

// factorial of number //
    let number = 5;
    factorial = 1;
    for ( i = 1; i<= number; i++)
        factorial = factorial * i;
    {
        console.log("factorial :" + factorial);
    }

// while loop //

let num = 123456;
let reverse = 0;
while (num>0)
{
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num/10);
}
console.log("reverse : " + reverse);

// count number //

let number1 = 64537282;
let count = 0;

while (number1 > 0) {

    number1 = Math.floor(number1 / 10);
    count++;

}

console.log("count : " + count);

// do while loop //

let choice = 0;
do {
    console.log("1.jayesh");
    console.log("2.janhavi");
    choice++
} while (choice < 1)
let num1 = 0;

do {
    console.log("Number is: " + num1);
    num1++;

} while (num1 <= 5);

let number5= 25346;
let sum2 = 0;
do {
    let digit = number5 % 10;
    sum2= sum2 + digit;
    number5= Math.floor(number5 / 10);

} while ( number5>0);
 console.log("sum2 :"+ sum2);

 // break//
 // serching number in array //

 let numbers8=[10,20,30,40,50,60];
 for ( i=0; i<numbers8.length; i++)
 {
        if(numbers8[i]===30){
        console.log("number found :" + i);
        break;
        
    }

    console.log("Checking:", numbers8[i]);
 }

 // continue //

 for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}

// print only odd numbers //
// print only odd numbers //

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log("odd numbers are : "+i);
}