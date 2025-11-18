let h2 = document.querySelector("h2");
let inc = document.querySelector(".increase");
let dec = document.querySelector(".decrease");
let res = document.querySelector(".reset");

let a = 0;

inc.addEventListener("click",function(){
    a++;
    console.log(a);

    h2.innerHTML = a;
})

dec.addEventListener("click",function(){
    a--;
    console.log(a);

    h2.innerHTML = a;
})

res.addEventListener("click",function(){
    a = 0;
    console.log(a);

    h2.innerHTML = a;
})
