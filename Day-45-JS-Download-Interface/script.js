let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let bar = document.querySelector(".bar");
let progressBar = 0;

btn.addEventListener("click", function() {
    btn.style.pointerEvents = "none";

    let dt = 40 + Math.floor(Math.random()*50);

    console.log("Your song will download in",dt/10,"seconds");

    let interval = setInterval(() => {
        progressBar++;
        h2.innerHTML = progressBar + "%";
        bar.style.width = progressBar + "%";
    }, dt);

    setTimeout(() => {
        clearInterval (interval);
        btn.innerHTML = "Downloaded";
        btn.style.opacity = 0.5; 
    }, dt*100);
});