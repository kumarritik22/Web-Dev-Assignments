const h1 = document.querySelector("h1");
const text = h1.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let letterCount = 0;

h1.addEventListener("mousemove", function() {

    setInterval(function() {
        const string = text.split("").map(function(char, index) {
            if (index < letterCount) {
                return char 
            }
            return characters.split("") [Math.floor(Math.random()*characters.length)]
        }).join("");

        h1.innerText = string;
        letterCount += 0.10;

    }, 30)
});