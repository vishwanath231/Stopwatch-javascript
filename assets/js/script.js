
// INITIAL VALUE
let hour = 0,
minute = 0,
second = 0;

var stopWatch;

// TIMER
var displayHour = document.getElementById("hours");
var displayMinute = document.getElementById("minutes");
var displaySecond = document.getElementById("seconds");

// BUTTONS
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");
var lapBtn = document.getElementById("lap");


// START BUTTON
startBtn.addEventListener("click",()=> {
    startBtn.style.display = "none";
    stopBtn.style.backgroundColor = "#d92027";
    stopBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
    lapBtn.style.display = "inline-block";

    stopWatch = setInterval(() => {

        second++;
        if (second == 60) {
            second = 0;
            minute++;
        }
        if (minute == 60) {
            minute = 0;
            hour++;
        }

        if (hour <= 9) {
            displayHour.innerHTML = "0" + hour + " &nbsp: ";
        }else{
            displayHour.innerHTML = hour + " &nbsp: ";
        }
        if (minute <= 9) {
            displayMinute.innerHTML = "0" + minute + " &nbsp: ";
        }else{
            displayMinute.innerHTML = minute + " &nbsp: ";
        }
        if (second <= 9) {
            displaySecond.innerHTML = "0" + second;
        }else{
            displaySecond.innerHTML = second;
        }
    }, 1000);
});


// STOP BUTTON
stopBtn.addEventListener("click", ()=> {
    startBtn.style.display = "inline-block";
    startBtn.style.backgroundColor = "#17b978";
    stopBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
    lapBtn.style.display = "inline-block";
    clearInterval(stopWatch);
})


// RESET BUTTON
resetBtn.addEventListener("click", ()=>{
    startBtn.style.display = "block";
    resetBtn.style.display = "none";
    stopBtn.style.display = "none";
    lapBtn.style.display = "none";

    clearInterval(stopWatch);

    displayHour.innerHTML = "00 &nbsp:";
    displayMinute.innerHTML = "00 &nbsp:";
    displaySecond.innerHTML = "00";

    hour = 0;
    minute = 0;
    second = 0;
    count = 1;

    displayLaps.innerHTML = " ";
    
});



// LAP BUTTON
var displayLaps = document.getElementById("laps");
var count = 1;

lapBtn.addEventListener("click", () => {
  var newDiv = document.createElement('div');
    newDiv.innerHTML = `<span class="count"> ${count++}. </span> ${hour} : ${minute} : ${second} `;
    displayLaps.appendChild(newDiv);
});

