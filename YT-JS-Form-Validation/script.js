let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", (dets)=> {
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    isValid = true;

    if (!emailAns) {
        document.querySelector("#emailError").textContent = "Incorrect email.";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }


    if (!passwordAns) {
        document.querySelector("#passwordError").textContent = "Incorrect password.";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }

    if (isValid) {
        document.querySelector("#resultMessage").textContent = "Email & Password is correct.";
    }
});