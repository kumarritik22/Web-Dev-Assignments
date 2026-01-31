let mouseFollower = document.querySelector(".mouse-follower");

let x = 0;
let y = 0;

addEventListener("mousemove", (e)=> {
    const {clientY, clientX} = e
    
    mouseFollower.style.transform = `translate(${clientX}px, ${clientY}px)`

    x = clientX;
    y = clientY;  
})

function far(){
    mouseFollower.style.transform = `translate(${x}px, ${y}px)`
    requestAnimationFrame(far)
}

far();