console.log("connected!")

// 1. Declare your name using all three: var a = “Harshˮ; let b = “Sheryiansˮ; const c 
// = “Schoolˮ
var a = "Ritik";
let b = "Sheryians";
const c = "School";

// 2. Try reassigning them: a = “Updatedˮ; b = “Updatedˮ; c = “Updatedˮ
a = "updated";
b = "updated";
// c = "updated";

// 3. Create a variable inside curly braces using
{
    let m = 12;
}

// console.log (m);

// 4. Predict output before running.
// It will show an Reference error (m is not defined), because it is a block scoped Element.

// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)
const myname = "Ritik Kumar";
const mygender = "Male";
const myAadhar = "9620543032984576";

// Logging and Interaction (console, alert, prompt)

// 1. Log name, age, and city using console.log, 
// console.info, console.warn.
let username = "Ritik Kumar";
let Age = "23";
let city = "Noida";

console.log(username);
console.info(Age);
console.warn(city);

// 2. Use prompt to take userʼs name → alert a welcome message.
let u = prompt("Enter your username?");
alert(`Welcome! ${u}`);

// 3. Log typeof of userʼs input.
console.log(typeof (u));

// 4. Try: let age = prompt(“Enter age:ˮ); console.log(age + 5); observe what 
// happens.
let age = prompt("Enter your age");
console.log(Number (age) + 5);

// Working with Strings

// 1. let msg = “I love Sheryiansˮ;
let msg = "I love Sheryians";

// 2. Try msg.slice(2, 6) and predict the result.
console.log(msg.slice(2, 6));

// 3. Try msg.split(ˮ “) and count words.
console.log(msg.split(""));

// 4. Try msg.replace(“loveˮ, “study atˮ).
console.log(msg.replace("love", "study at"));

// 5. Template string example: let name = “Harshˮ; console.log(Hey ${name}, 
// welcome to JS!
let mynames = "Ritik";
console.log(`Hey! ${mynames}, Welcome to JS!`);

// 6. Check if msg.includes(“loveˮ)
console.log(msg.includes ("love"))

// Statements and Semicolons
// 1. Remove semicolon and check if code still runs.
// code is still running.

// 2. Combine two statements in one line and see if it breaks.
// console.log("Bhopal") console.log("Noida")
// Getting syntaxError unexpected identifier 'console'

// 3. Write 3 console.log statements without semicolons and predict output.
// console.log("Noida")console.log("Delhi")console.log("Gurugram")
// It will give the syntaxError.

// Comments
// 1. Write your name as a single-line comment.
// Ritik Kumar

// 2. Write a 3-line comment explaining what your code does.
/* My code 
helps in
resolving problems. */

// 3. Hide one console.log using comment and check output.
// console.log(Mars);

//  Expressions vs Statements
// 1. Type 5 + 10 (expression).
5 + 10

// 2. Type let x = 10; (statement).
let x = 10;

// Which one gives a value immediately?
// Expression will give a value immediately.

//  4. Try: let y = (5 + 10) * 2; console.log(y)
let y = (5 + 10) * 2;
console.log(y);

// 5. Write one line explaining the difference between both.
// Expression gives value.
// Statements performs actions.

// Data Types
/* 1. let age = 25; let name = “Harshˮ; let isStudent = true; let skills = [“JSˮ, 
“HTMLˮ]; let user = { city: “Bhopalˮ }; let x = null; let y; let z = Symbol(“idˮ) */
let ages = 25;
let Name = "Ritik";
let isStudent = true;
let skills = ["JS", "HTML"];
let user = {city: "Noida"};
let n = null;
let o;
let z = Symbol("id");

// 2. Log typeof each variable.
console.log(typeof (ages));
console.log(typeof (Name));
console.log(typeof (isStudent));
console.log(typeof (skills));
console.log(typeof (user));
console.log(typeof (n));
console.log(typeof (o));
console.log(typeof (z));

// 3. Change one value and recheck typeof.
let userage = String(ages);
console.log(typeof (userage));

// 4. Try adding a number and string together.
console.log("Ritik" + 2);

// Special Values

// 1. Log 1 / 0, 0 / 0, Number(“abcˮ), undefined + 1
console.log(1/0); // Infinity
console.log(0/0); // NaN
console.log(Number("abc")); // NaN
console.log(undefined + 1); // NaN

//  Primitive vs Reference
// 1. let x = 5; let y = x; y = 10; console.log(x, y)
let e = 5;
let f = e;
f = 10;

console.log(e, f);

// 2. let obj1 = { name: “Harshˮ }; let obj2 = obj1; obj2.name = “Sheryiansˮ;
// console.log(obj1.name)
let obj1 = {name: "Ritik"};
let obj2 = obj1;
obj2.name = "Sheryians";

console.log(obj1.name)





