function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme || getSystemTheme());
}

setInitialTheme();

window.matchMedia("(prefers-color-scheme: dark)")
window.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getSystemTheme());
    }
});

document.querySelector("button").addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});