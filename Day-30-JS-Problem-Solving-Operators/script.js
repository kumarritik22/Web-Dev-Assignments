// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)

// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.
let x = 5;
x = x + 3;

x += 3;
x -= 3;
x *= 3;
x /= 3;


// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.
let count = 5;
console.log(count);
count++
console.log(count);

console.log(count);
count--
console.log(count);


// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.
5 == "5" // Output will be true, because loose equality only compares value.

5 === "5" // Output will be false, because strict equality compares both object type and value.


// e. Check if 10 is greater than 5, less than 20, and equal to 10.
let i = 10

if (i > 5 && i < 20 && i === 10) {
    console.log("x = 10")   
} else {
    console.log("x != 10")
}


// f. Try logical AND and OR:
true && false // false
true || false // true
!(true)       // false


// g. Predict the result of:
// (5 > 3 && 10 > 8) // true
// (5 > 3 || 10 < 8) // true


// 2. Variable Hoisting in JavaScript
// a. Predict output of:
// console.log(a);
// var a = 10
// Output will be undefined.


// b. Predict output of:
// console.log(b);
// let b = 10
// We will get ReferenceError, cannot access b before initilization.


// c. Predict output of:
// test()
// function test() { console.log(“Hello”) } // Hello


// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }
// Write what happened and why.

// when we run this code then var hello will move top of the code and then JS sees it as 
// var hello = undefined, and then we call hello(), then JS gives a TypeError, var is not a function.
// this is Function expression, and In function expression only variable (var) gets hoisted, 
// which is undefined, So we will get TypeError, hello is not a function.


// e. Write one sentence:
// What gets hoisted? // function declaration.
// What does not get hoisted fully? // var, let, const and function expression.


// 3. Conditional Operators (if, else, else-if, ternary, switch)
// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

let age = prompt("What is your Age?")
    
if (age > 18) {
   console.log("Adult") 
} else {
    console.log("Minor")
}


// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

let marks = 85;

if (marks >= 90) {
    console.log("A grade")
} else if (marks >= 75){
    console.log("B grade")
} else if (marks >= 50) {
    console.log("C grade")
} else {
    console.log ("Fail")
}


// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

let city = "Bhopal";

if (city === "Bhopal") {
    console.log ("MP")
} else if (city === "Delhi") {
    console.log ("Capital")
} else {
    console.log("Unknown City")
}


// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

let score = 40;

let result = score > 35 ? "Pass" : "Fail";
console.log(result);


// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

let temperature = 20;

let weather = temperature > 30 ? "Hot" : "Pleasant"
console.log(weather);


// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

let day = 4

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
        break;
}


// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let Age = 20;
let country = "India";

if (Age > 18 && country === "India") {
    console.log("Eligible for vote")
} else {
    console.log("Not Eligible")
}



