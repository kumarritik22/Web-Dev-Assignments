function openFeatures() {
    let allElems = document.querySelectorAll(".elem");
    let fullElemPage = document.querySelectorAll(".fullElem");
    let fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

allElems.forEach(function(elem) {
    elem.addEventListener("click", function() {
        fullElemPage[elem.id].style.display = "block";
    })
})

fullElemPageBackBtn.forEach(function(back) {
    back.addEventListener("click", function() {
        fullElemPage[back.id].style.display = "none";
        
    })
})
}

openFeatures();


// TO DO LIST PAGE
function todoList() {

    let currentTask = []

if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"))
} else {
    console.log("Task list is Empty.")
}

function renderTask() {

    let allTask = document.querySelector(".allTask");

    let sum = ""

currentTask.forEach(function(elem, idx) {
    sum += `<div class="task">
                <h5>${elem.task} <span class=${elem.imp}>Imp</span></h5>
                <button id=${idx}>Mark as Completed</button> 
            </div>`
})

allTask.innerHTML = sum

localStorage.setItem("currentTask", JSON.stringify(currentTask));

let markCompletedBtn = document.querySelectorAll(".task button");

    markCompletedBtn.forEach(function (btn) {
    btn.addEventListener("click", function() {
        currentTask.splice(btn.id, 1)
        renderTask();
    })  
})
}

renderTask()

let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form input");
let taskDetailsInput = document.querySelector(".addTask form textarea");
let taskCheckbox = document.querySelector(".addTask form #check");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    currentTask.push(
        {
            task:taskInput.value, 
            details:taskDetailsInput.value,   
            imp:taskCheckbox.checked
        }
    )
    renderTask()

    taskInput.value = ""
    taskDetailsInput.value = ""
    taskCheckbox.checked = false
})
}

todoList();


// DAILY PLANNER PAGE
function dailyPlanner() {
    let dayPlanner = document.querySelector(".day-planner");

    let dayPlannerData = JSON.parse(localStorage.getItem("dayPlannerData")) || {}

    let hours = Array.from({length:18}, (_, idx) => {
        return `${6 + idx}:00 - ${7 + idx}:00`
    })

    let wholeDaySum = ""
    hours.forEach(function(elem, idx) {

        let savedData = dayPlannerData[idx] || ""

        wholeDaySum = wholeDaySum + `<div class="day-planner-time">
                                        <p>${elem}</p>
                                        <input id=${idx} type="text" placeholder="..." value=${savedData}>
                                    </div>`
    })

    dayPlanner.innerHTML = wholeDaySum;


    let dayPlannerInput = document.querySelectorAll(".day-planner input");

    dayPlannerInput.forEach(function(elem) {
        elem.addEventListener("input", function() {
            dayPlannerData[elem.id] = elem.value;
            localStorage.setItem("dayPlannerData", JSON.stringify(dayPlannerData));
            
        })     
    })
}

dailyPlanner();


// MOTIVATION PAGE
function motivationalQuote() {
    let quote = document.querySelector(".motivation-2 h1");
    let quoteAuthor = document.querySelector(".motivation-3 h2");

    async function fetchQuote() {
        let response = await fetch("https://dummyjson.com/quotes/random")
        let data = await response.json();
        
        quote.innerHTML = data.quote;
        quoteAuthor.innerHTML = data.author;
    }

    fetchQuote();
}

motivationalQuote();


//POMODORO TIMER
function pomodoroTimer() {
    let timer = document.querySelector(".pomo-timer h2");
    let startBtn = document.querySelector(".pomo-timer .start-timer");
    let pauseBtn = document.querySelector(".pomo-timer .pause-timer");
    let resetBtn = document.querySelector(".pomo-timer .reset-timer");
    let session = document.querySelector(".pomodoro-fullpage .session");
    let isWorkSession = true 

    let totalSeconds = 25*60
    let timerInterval = null;


    function updateTimer() {
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = (totalSeconds % 60)

        timer.innerHTML = `${String(minutes).padStart("2","0")}:${String(seconds).padStart("2","0")}`
    }

    function startTimer() {
        clearInterval(timerInterval)

        if(isWorkSession) {
            timerInterval = setInterval(function() {
            if(totalSeconds > 0) {
                totalSeconds--
                updateTimer()
            } else {
                isWorkSession = false
                clearInterval(timerInterval)
                timer.innerHTML = "05:00"
                session.innerHTML = "Take a Break"
                session.style.backgroundColor = "var(--blue)"
                totalSeconds = 5*60
            }
        }, 1000)

        } else {
            timerInterval = setInterval(function() {
            if(totalSeconds > 0) {
                totalSeconds--
                updateTimer()
            } else {
                isWorkSession = true
                clearInterval(timerInterval)
                timer.innerHTML = "25:00"
                session.innerHTML = "Work Session"
                session.style.backgroundColor = "var(--green)"
                totalSeconds = 25*60
            }
        }, 1000)
        }
    }


    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        clearInterval(timerInterval)
        totalSeconds = 25*60
        updateTimer()
    }

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);
}

pomodoroTimer();


//WEATHER DASHBOARD 
function weatherFunctionality() {
    let city = "Noida"
    let apiKey = "903e239fcb9f4f99a03112006261101"
    let time = document.querySelector(".header1 h2");
    let date = document.querySelector(".header1 h3");
    let weatherLocation = document.querySelector(".header1 h4");
    let temperature = document.querySelector(".header2 h2");
    let weather = document.querySelector(".header2 h4");
    let feelsLike = document.querySelector(".header2 #feelsLike");
    let humidity = document.querySelector(".header2 #humidity");
    let wind = document.querySelector(".header2 #wind");


    let data = null;

    async function weatherAPICall() {
        response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        data = await (response.json())
        console.log(data);
        
        weatherLocation.innerHTML = `${data.location.name}, ${data.location.region}`;
        temperature.innerHTML = `${data.current.temp_c}°C`;
        weather.innerHTML = `${data.current.condition.text}`;
        feelsLike.innerHTML = `Feels Like: ${data.current.feelslike_c}°C`;
        humidity.innerHTML = `Humidity: ${data.current.humidity}%`;
        wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
        
    }

    weatherAPICall();

    function timeDate() {
        const totalDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
            "Saturday"];
        const totalMonths = ["January", "February", "March", "April", "May", "June", "July", 
            "August", "September", "October", "November", "December"];

        let date = new Date();
        let dayOfWeek = totalDaysOfWeek[date.getDay()];
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let exactDate = date.getDate();
        let month = totalMonths[date.getMonth()];
        let year = date.getFullYear();

        date.innerHTML = `${exactDate} ${month}, ${year}`
        
        if (hours > 12) {
            time.innerHTML = `${dayOfWeek}, ${String (hours - 12).padStart("2","0")}:${String (minutes).padStart("2","0")}:${String(seconds).padStart("2","0")} PM`
        } else {
            time.innerHTML = `${dayOfWeek}, ${String (hours).padStart("2","0")}:${String (minutes).padStart("2","0")}:${String(seconds).padStart("2","0")} AM`
        }
    }

    setInterval(() => {
        timeDate()
    }, 1000);
}

weatherFunctionality();


// CHANGE THEME
function changeTheme() {
    let theme = document.querySelector(".theme");
    let rootElement = document.documentElement

    let flag = 0;
    theme.addEventListener("click", function() {
        
        if (flag === 0) {
            rootElement.style.setProperty("--pri", "#FAF3E1")
            rootElement.style.setProperty("--sec", "#F5E7C6")
            rootElement.style.setProperty("--ter", "#FF6D1F")
            rootElement.style.setProperty("--qua", "#222222")
            flag = 1;
        } else if (flag === 1) {
            rootElement.style.setProperty("--pri", "#5F9598")
            rootElement.style.setProperty("--sec", "#F3F4F4")
            rootElement.style.setProperty("--ter", "#1D546D")
            rootElement.style.setProperty("--qua", "#061E29")
            flag = 2;
        } else if (flag === 2) {
            rootElement.style.setProperty("--pri", "#FE7F2D")
            rootElement.style.setProperty("--sec", "#F5FBE6")
            rootElement.style.setProperty("--ter", "#215E61")
            rootElement.style.setProperty("--qua", "#233D4D")
            flag = 0;
        }
    })
}

changeTheme();
