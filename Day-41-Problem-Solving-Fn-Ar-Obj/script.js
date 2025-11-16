// 1. Write a higher-order function runTwice(fn) that takes another function and executes it two times.

function runTwice(fn) {
    fn();
    fn();
}

runTwice (function () {
    console.log("Hello");
});


// 2. Create one pure function that always returns the same output for given input, and one impure function using a global variable.

function pure(a, b) {
    return a + b;
}

console.log(pure(10, 20));

let a = 12;

function impure() {
    a++;
    console.log(a);
}

impure();


// 3. Write a function that uses object destructing inside parameters to extract and print name and age.

function destructure({name, age}) {
    console.log(name, age);
}

destructure({name: "Virat Kohli", age: 37});


// 4. Demonstrate the difference between normal function and arrow function when used as object method (this issue).

let obj = {
    name: "rohit sharma",
    age: 38,
    normalMethod: function abcd() {
        console.log(this.name);
    },
    arrowMethod: () => {
        console.log(this.name);
    }
}

obj.normalMethod();
obj.arrowMethod();


// 5. Given an array of numbers, use map() to create a new array where each number is squared.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newarr = arr.map(function (val) {
    return val * val;
});

console.log(newarr);


// 6. Use filter() to get only even numbers from an array.

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

let newArr = Arr.filter(function (val) {
    if (val % 2 === 0) return true;
});

console.log(newArr);


// 7. Use reduce to find total salary from an array of numbers [1000, 2000, 3000].

let salary = [1000, 2000, 3000];

let totalSalary = salary.reduce(function (acc, val) {
    return acc + val;
}, 0);

console.log(totalSalary);


// 8. Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars).

let names = ["Nitish", "Mahesh", "Suresh", "Ganesh", "Pawan", "Vayu", "Ali", "Eti"];

let shortNames = names.some(function (val) {
    return val.length > 3;
});

console.log(shortNames);

let longNames = names.every(function (val) {
    return val.length > 3;
});

console.log(longNames);


// 9. Create an object user and test the behavior of object.freeze() and object.seal() by adding/changing keys.

let user = {
    name: "Shubman Gill",
    age: 26,
    occupation: "Cricketer",
};

Object.seal(user);
user.country = "India";
delete user.age
user.name = "Virat Kohli";
user.age = 37;

console.log(user);

let user2 = {
    name: "Steve Smith",
    age: 36,
    country: "Australia",
};

Object.freeze(user2);
user2.country = "India";
user2.occupation = "Test Cricketer";
delete user2.age

console.log(user2);


// 10. Create a nested object (user, address, city) and access the city name inside it.

let person = {
    user: {
        name: "Josh Inglis",
        address: {
            city: "Perth",
        }
    }
}

let {city} = person.user.address;

console.log(city);

