let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = ["You achieve success only when it becomes as essential to you as breathing.", "Time reveals everything.", "Your actions speak louder than your words.", "Discipline predicts your future.", "Your effort exposes your intentions.", "You are what you repeatedly do.", "Silence shows truth more than people do.", "Pain teaches what comfort hides.", "Your habits shape your destiny.", "Loneliness is a teacher, not a curse.", "Not everything lost is meant to return.", "Patience exposes what hurry destroys.", "Your future is created in silence.", "Energy never lies.", "Your choices whisper who you will become.", "Distance reveals true intentions.", "Consistency is louder than talent.", "People remember how you made them feel, not what you said.", "Your mind is your prison or your power.", "If it still hurts, it mattered."];

btn.addEventListener("click", function() {
    let h1 = document.createElement("h1");

    let x = Math.random() * 80
    let y = Math.random() * 80
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    let rotate = Math.random()*365
    let scale = Math.floor(Math.random()*3);

    h1.style.color = (`rgb(${c1},${c2},${c3})`);
    h1.style.position = "absolute";
    h1.style.left = x + "%";
    h1.style.top = y + "%";
    h1.style.rotate = rotate + "deg";
    h1.style.scale = scale;
    h1.style.opacity = 0.8;

    let a = Math.floor(Math.random()*arr.length);
    h1.innerHTML = arr[a];
    main.appendChild(h1);

    setTimeout(() => {
    h1.remove();
}, 4000);

});