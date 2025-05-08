let minutes = 0;
let seconds = 0;
let tens = 0;
let appendMinutes = document.querySelector('#minutes');
let appendTens = document.querySelector('#tens');
let appendSeconds = document.querySelector('#seconds');
let Interval;

window.onload = function() {
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let newgameBtn = document.querySelector('#newGame');

    const startTimer = () => {
        tens++
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens
        }
        if (tens > 9) {
            appendTens.innerHTML = tens
        }

        if (tens > 99) {
            seconds++
            appendSeconds.innerHTML = '0' + seconds
            tens = 0
            appendTens.innerHTML = '0' + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }

        if (seconds > 59) {
            minutes++
            appendMinutes.innerHTML = '0' + minutes
            seconds = 0
            appendSeconds.innerHTML = '0' + 0;
        }
    }

    startBtn.onclick = () => {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10);
    }

    stopBtn.onclick = () => {
        clearInterval(Interval)
    }

    resetBtn.onclick = () => resetTimer();
}

window.resetTimer = function() {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.innerHTML = '00';
    appendSeconds.innerHTML = '00';
    appendMinutes.innerHTML = '00';
}