// Level-1 Basic Functions, Array, & Objects questions (Easy).  

// 1. Write a function sayHello() that prints "Hello JavaScript".

function sayHello() {
    console.log("Hello JavaScript");
}
sayHello(); 


// 2. create a function add(a, b) that returns their sum and log the result.

function add(a , b) {
    return a + b;
}
let sum = add(13 , 25);
console.log(sum);


// 3. Write a function with a default parameter name = "Guest" that prints "Hi <name>".

function greet(guest = "Guest") {
    console.log(`Hi ${guest}`);
}
greet();


// 4. Use rest parameters to make a function that adds unlimited numbers.

function addUnlimited(...nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
addUnlimited(23, 34, 23, 46, 50);


// 5. Create an IIFE that prints "I run Instantly!".

(function() {
    console.log("I run Instantly!");
}) ();


// 6. Make a nested function where the inner one prints a variable from the outer one.

function outer() {
    let a = ("fighter");

    function inner() {
        console.log(a);
    }
    inner();
}
outer();


// 7. Create an array of 5 fruits, add one at the end and remove one from the beginning.

let arr = ["Grapes", "Mango", "Orange", "Apple", "Guava"];

arr.push = ("Banana");

arr.shift = ("Grapes");


// 8. Use a for loop to print all elements of an array.

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}


// 9. Create an object person with keys name, age, and city and print each key's value.

let person = {
    name: "Virat Kohli",
    age: 37,
    city: "London",
};

for (let key in person) {
    console.log(person[key]);
}


// 10. Use setTimeout() to log "Time's up!" after 2 seconds.

setTimeout(function () {
    console.log("Time's up!");
}, 2000);