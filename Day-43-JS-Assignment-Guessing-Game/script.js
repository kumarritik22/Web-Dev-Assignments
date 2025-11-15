let button = document.querySelector("button");
let box = document.getElementById("box");

button.addEventListener("click" , function() {
    let c = (Math.floor(Math.random() * 256));
})

let balance = 1000;
let flag = false;
let withdrawalCount = 0;

while(balance <= 0 && withdraw !== 3) {
    let withdraw = +prompt("How much money do you want to withdraw?");
    withdrawalCount++;
    if (withdraw <= balance) {
        withdraw -= balance;
    } else {
        flag = true;
        break;
    }
}

if (flag === true) {
    console.log("Insufficent balance");
}

console.log(`Balance : ${balance}`);