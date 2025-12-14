// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.

let laptop = {
    brand: "Asus",
    price: 50000,
    start: function() {
        console.log("Laptop started");
    },
    increasePrice: function(price) {
        this.price += this.price * 0.1;
        return this.price;
    },
};

console.log(laptop.increasePrice());

// Write down (in words or code) what problems you will face if you keep using plain objects.

// If I need to make 10 more objects like laptop only using plain obejcts, then I have to write same code again and again which will be common in all the objects, So it would become long and messy.


// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        return this.name + " - " + this.salary;
    }
}

let emp1 = new Employee("Manish", 10000);
let emp2 = new Employee("Suresh", 20000);
let emp3 = new Employee("Mahesh", 30000);

// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

// Because classes allow us to define a common structure and behaviour once, and then we can create multiple objects with different data. This avoida code repetition, keeps code clean, and easy to maintain.


// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

class BankAccount {
    constructor(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }
}

let account1 = new BankAccount("Mahesh", 1000);
let account2 = new BankAccount("Suresh", 2000);
account1.deposit(500);

// Observe and explain why the second account is not affected.

// Because each object created from a class has its own separate data, and when we are depositing balance in only account1 so only account1 balance changes, account2 is not affected because it is different instance with its own balance.


// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

let profile = {
    username: "vivek",
    printName: function() {
        console.log(this.username);
    },
};

// profile.printName();

// const fnc = profile.printName;
// fnc();

profile.printName();

// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.

// When a method is stored in a separte variable it loses its object reference, As a result, this no longer refers to the object, So this.username becomes undefined. 


// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;
    // this.describe = function() {
    //     console.log("A good car for the families like you.");
    // }
}

Vehicle.prototype.describe = function() {
    console.log("A good car for the families like you.");
}

let v1 = new Vehicle("Hatchback", "alloywheels");
let v2 = new Vehicle("Sedan", "alloywheels");
let v3 = new Vehicle("Suv", "alloywheels");

// 	18.	Explain why the prototype approach is preferred.
// The prototype approach is preferred because methods are shared between all the objects instead of being recreated for each one, which helps in memory efficiency, improve performance and make the code more efficient and scalable.


// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.

function showBrand() {
    console.log(this.brand);
}

let brand1 = {
    brand: "Puma",
};

let brand2 = {
    brand: "Adidas",
};

showBrand.call(brand1);
showBrand.call(brand2);

// 	22.	Explain what problem call is solving here.
// Call() solves the problem of controlling the value of this inside a function, it allows us to use the same function for the different objects by explicitly specifying which object should act as this.


// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.

function introduce(city, role) {
    console.log(this.name, city, role);
}

let obj = {
    name: "Geeta",
};

introduce.apply(obj, ["Noida", "Full-stack Developer"]);

// 26.	Explain in simple words how apply differs from call.
// Apply() also works like call(), but the difference is that the call() takes arguments one by one, while apply() takes arguments in an array.


// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.

function greet() {
    console.log("Hello " + this.name);
}

let greetObj = {
    name: "Shraddha Singh",
}

let fnc1 = greet.bind(greetObj);
fnc1();

// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.
// bind() is useful because it sets the value of this permanently, when a function is executed later or passed as a callback, value of this can be lost, using bind() ensures that this always refers to the correct object.