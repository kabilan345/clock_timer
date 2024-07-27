let timer;
let isRunning = false;
let seconds = 0;

function formatTime(sec) {                         //formatTime(3661)
    let hrs = Math.floor(sec / 3600);              //Math.floor(3661 / 3600) → 1 hour
    let mins = Math.floor((sec % 3600) / 60);     //Math.floor((3661 % 3600) / 60) → Math.floor(61 / 60) → 1 minute
    let secs = sec % 60;                          //3661 % 60 → 1 second

    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;  //function formatTime(3661) returns the string "01:01:01".
}

function updateTimerDisplay() {
    document.getElementById('timer').innerHTML = formatTime(seconds);
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => { //callback function
            seconds++;
            updateTimerDisplay();
        }, 1000);// the interval is set to 1000 milliseconds
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);// the interval is cleared so the timer is stoped
    isRunning = false;
    updateTimerDisplay();
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateTimerDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

