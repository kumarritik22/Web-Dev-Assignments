function createToaster(config) {
    return function(str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

        document.querySelector(".parent").appendChild(div);

        if (config.positionX !== "left" || config.positionY !== "top") {
            document.querySelector(".parent").className +=
            ` ${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
        }

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    }
}

let toaster = createToaster({
    positionX: "left",
    positionY: "bottom",
    theme: "light",
    duration: 3,
});

toaster("Shraddha sent you a message");

setTimeout(() => {
    toaster("3 Missed called from Jahnvi")
}, 1000);

setTimeout(() => {
    toaster("Sandeep sent you a request")
}, 2000);