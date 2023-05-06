// dom
const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondsHand = document.querySelector(".seconds"),
    modeSwitch = document.querySelector(".mode-switch");


    // event lister for dark mode
    modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");

        // dark mode check
        const isDarkMode = body.classList.contains("dark");
        // text change
        modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

        // set localstorage
        localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
    })

const UpdateTime = () => {
    // current time
    let date = new Date(),
        SecToDeg = (date.getSeconds() / 60) * 360;
        minToDeg = (date.getMinutes() / 60) * 360;
        hrToDeg = (date.getHours() / 12) * 360;
    console.log(SecToDeg);
    // rotate
    secondsHand.style.transform = `rotate(${SecToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}



// call update
setInterval(UpdateTime, 1000);

// function name
UpdateTime();