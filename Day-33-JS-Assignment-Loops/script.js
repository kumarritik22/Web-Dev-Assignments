// Level 1 – Pure Beginner Practice

// 1. Print numbers from 1 to 10.
// Loop from 1 to 10 and print each number.

for (let i = 1; i < 11; i++) {
    console.log(i);
}


// 2. Print only even numbers from 1 to 20.
// Use a loop and condition to print only even ones.

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 3.Print numbers from 10 to 1.
// Reverse loop with a decrement.

for (let i = 10; i > 0; i--) {
    console.log(i);
}


// 4. Print the word "Yes" 5 times.
// Repeat using a loop.

for (let i = 1; i < 6; i++) {
    console.log("Yes");
}


// 5. Print whether numbers from 1 to 10 are even or odd.
// for each Number, check: even = "even", else = "Odd"

for (i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - Even`)
    } else {
        console.log(`${i} - Odd`)
    }
}


// 6. Ask user for a number and say if it's positive or negative.
// Use prompt () and a conditional.

let num = +prompt("type any number positive or negative?")

if(num >= 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}


// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let age = prompt("Type your Age?");

if (age === null) {
    console.error("You cancelled it.");
}
else if (age.trim() === "") {
    console.error("Please enter something...");
} 
else {
    age = Number(age);
    if (isNaN(age)) {
        console.error("Please enter a number...");
    }
    else if (age <= 0 || age > 150) {
        console.error("Invalid Age.");
    }
    else if (age >= 18) {
        console.log("Eligible for voting");
    }
    else {
        console.log("Not Eligible for voting.");
    }
}


// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

for (let i = 1; i < 11; i++) {
    console.log(`5 * ${i} = ${5 * i}`)
}


// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

let count = 0;

for (let i = 1; i < 16; i++) {
    if (i > 8) {
        count++;
    }
}

console.log(count);


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let correctPassword = "Smart123";
let userPassword = prompt("Enter Password?");

if (userPassword === null) {
    console.error("You cancelled it.");
} 
else if (userPassword.trim() === "") {
    console.error("Please enter valid password...");
}
else if (userPassword === correctPassword) {
    console.log("Access Granted");
} 
else {
    console.log("Access Denied");
}


// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let Password = "JaiHind";
let attempts = 0;
let loggedIn = false;

while (attempts < 3) {
    let userPass = prompt("Enter Password?");

    if (Password === userPass) {
        console.log("Access Granted");
        loggedIn = true;
        break;
    }
    console.log("Wrong Password");
        attempts++;
    }   
    
    if (loggedIn === false) {
        console.log("Account Locked!");
    }


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".    

let word = prompt("type some words?");
let counter = 0;

while(word !== "stop") {
    if (word === "yes") {
        counter++;
    }

    word = prompt("type some words?");
}

console.log(`Total times Yes typed - ${counter}`);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for (let i = 1; i < 51; i++) {
    if (i % 7 === 0){
        console.log(i);
    }
}


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum = 0;

for (let i = 1; i < 31; i++) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
}

console.log(`Final sum - ${sum}`);


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

let numbers = +prompt("type some numbers?");

while(numbers % 2 !== 0) {
    numbers = +prompt("type some numbers?");
}


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let start = +prompt("start typing number");
let end = +prompt("stop typing number");

if (start > end) {
    console.error("start cannot be greater than end.")
}

for(let i = start; i <= end; i++) {
    console.log(i);
}


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

let counters = 0;

for (let i = 1; i <= 20; i++) {
    if (counters === 3) break;

    if (i % 2 !== 0) {
        console.log(i);
        counters++;
    }
}

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”




