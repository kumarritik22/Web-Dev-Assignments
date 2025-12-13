// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.


// Without class approach

let user1 = {
    name: "Baahubali",
    email: "baahubali@epic.com",
    login: function() {
        console.log("Baahubali logged in");
    },
};

let user2 = {
    name: "Bhalaldeva",
    email: "bhalaldeva@epic.com",
    login: function() {
        console.log("Bhalaldeva logged in");
    },
};

let user3 = {
    name: "Kattapa",
    email: "Kattapa@epic.com",
    login: function() {
        console.log("Kattapa logged in");
    },
};

let user4 = {
    name: "Shivgami",
    email: "Shivgami@epic.com",
    login: function() {
        console.log("Shivgami logged in");
    },
};

let user5 = {
    name: "Devsena",
    email: "Devsena@epic.com",
    login: function() {
        console.log("Devsena logged in");
    },
};


// With class approach

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

     login() {
        console.log("user logged in");
    }
};

let U1 = new User("Yudhisthir", "Yudhisthir@mahabharat.com");
let U2 = new User("Bheem", "Bheem@mahabharat.com");
let U3 = new User("Arjun", "arjun@mahabharat.com");
let U4 = new User("Nakul", "Nakul@mahabharat.com");
let U5 = new User("Sahdev", "Sahdev@mahabharat.com");


// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
    productName: "pencil",
    price: 10,
    discountedPrice: function() {
        return this.price - 2;
    },
};

console.log(product.discountedPrice());


// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 	5.	Create two different car objects from the same class and verify that their data is different.
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    drive() {
        return this.brand + " - " + this.speed;
    }
}

let car1 = new Car("BMW", 300);
let car2 = new Car("Mercedes", 310);
let car3 = new Car("Audi", 290);

// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// If we don't have classes then I could have write this logic using objects, and it would get too messy,long and we have to create multiple objects and also we have to write mulitple line of code for the same thing which will be common for every objects, when project becomes large.


// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.

class Student {
    constructor(name, rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }

    introduce() {
        return this.name  + " - " + this.rollNumber;
    }
}

std1 = new Student("Abhimanyu", 12);

// Then try removing this and notice what error occurs and why.

// If we remove this then we will get undefined undefined, because this means std1 object and when we remove this then we don't have anything in std1 object, that's why we get undefined undefined.

// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function
// Inside both, print this and observe the difference.

let obj = {
    normalFunction: function() {
        console.log(this);
    },

    arrowFunction: () => {
        console.log(this);
    },
};

obj.normalFunction();
obj.arrowFunction();


// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.

function Employee(val) {
    this.name = val;
    this.login = function() {
        console.log("Employee logged in");
    }
}

let employee1 = new Employee("Mahesh");
let employee2 = new Employee("Suresh");

// Explain why the result is true or false.

// If login method is outside constructor and then we compare both employee's login method then answer will be true, because both employee's login method is in prototype so it is a shared login method, that's why answer is true.

// If login method is inside constructor and then we compare both employee's login method then answer will be false, because although both employee's have same login method but it is not shared, both have their own login method, that's why answer is false.


// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.

function man() {
    console.log(this.name);
}

let object = {
    name: "Advik",
}

man.call(object);
man.apply(object);
let fnc = man.bind(object);
fnc();

// 	15.	Borrow a method from one object and run it for another object using call.

let animal = {
    petName: "Cat",
    speak: function() {
        console.log(this.petName + " makes a sound");
    },
};

let bird = {
    petName: "Parrot",
};

animal.speak.call(bird);

