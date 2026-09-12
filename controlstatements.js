
// CONTROL STATEMENTS IN JAVASCRIPT


// 
// 1. IF-ELSE STATEMENT
// Question: Check whether a person is eligible for voting


let age = 18;

if (age >= 18) {
    console.log("You are eligible for voting");
} else {
    console.log("You are not eligible for voting");
}





// 
// 2. EVEN OR ODD NUMBER
// Logic: If a number is completely divisible by 2,
//       then it is even, otherwise it is odd.


let num = 22;

if (num % 2 == 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}


// Output:
// Number is even



// 
// 3. POSITIVE, NEGATIVE OR ZERO


let number = -45;

if (number < 0) {
    console.log("Number is negative");

} else {
    console.log("Number is positive");
}


//greter or smaller number//
let a = 25;
let b = 40;

if (a > b) {
    console.log(a + " is greater");
} else if (b > a) {
    console.log(b + " is greater");
} else {
    console.log("Both numbers are equal");
}

// pass or fail//
let marks = 65;
if (marks >=35)
{
    console.log("You have passed the exam");
} else {
    console.log("You have failed the exam");    
}

// leap year//
let year = 2026;
if((year % 4 ==0 && year % 100 != 0 ) || (year % 400 == 0)){
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

// 2 else if statements //

let number1 = -45;

if (number1 > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// grade caculation//

let marks1 = 90;
if (marks1 >=90)
{
    console.log("grade A : excellent performance");
} else if (marks1 >= 80)
    {
        console.log("grade B : very good performance");
    }
    else if (marks1 >= 70)
    {
        console.log("grade C : good performance");
    }
    else if (marks1 >= 60)
    {
        console.log("grade D : average performance");
    }
    else if (marks1 >= 50)
    {
        console.log("grade E : below average performance");
    }   

    // age classification//

   let age1 = 25;

if (age1 <= 12) {
    console.log("Child");
} else if (age <= 19) {
    console.log("Teenager");
} else if (age1 <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// Largest of Three Numbers//

let num1 = 25;
let num2 = 40;
let num3 = 15;
if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest number");
}
    else if (num2 >= num1 && num2 >= num3) {
        console.log(num2 + " is the largest number");
    }
    else {
        console.log(num3 + " is the largest number");
    }

    // Login Check//

let username = "admin";
let password = "password123";
    if (username === "admin" && password === "password123") {
        console.log("Login successful");
    } else if (username !== "admin") {
        console.log("Invalid username or password");
    }
    else if (password !== "password123") {
        console.log("Invalid username or password");
    } else {
        console.log("Invalid username or password");
    }

    /// 3. NESTED if /// 

    //ATM Withdrawal//
 let pin = 1234;
let correctPin = 1234;

let balance = 5000;
let withdrawal = 2000;

if (pin === correctPin) {

    if (withdrawal <= balance) {
        console.log("Withdrawal successful");
        console.log("Remaining balance:", balance - withdrawal);
    } else {
        console.log("Insufficient balance");
    }

} else {

    console.log("Incorrect PIN");
}

// exam eligibility//

let attendance = 80;
let feesPaid = true;

if (attendance >= 75) {

    if (feesPaid === true) {
        console.log("Eligible for exam");
    } else {
        console.log("Pay your fees first");
    }

} else {

    console.log("Attendance is too low");
}

// Driving Eligibility//

let age2 = 20;
let hasLicense = true;

if (age >= 18) {

    if (hasLicense === true) {
        console.log("You can drive");
    } else {
        console.log("You need a driving license");
    }

} else {

    console.log("You are underage");
}


// nested if else//

let age3 = 19;
if (age3 >= 18)
{
    if (age3 >= 21)
    {
        console.log("You are eligible to drink alcohol");
    } else {
        console .log (" you are adult but not eligible to drink alcohol");
    } }