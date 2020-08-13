window.onload = function() {
    var startButton = document.getElementById("startButton");
    var resetButton = document.getElementById("resetButton");
    var minutesDisplay = document.getElementById("minutesDisplay");
    var secondsDisplay = document.getElementById("secondsDisplay");
    var hundredsDisplay = document.getElementById("hundredsDisplay");
    var seconds = 0;
    var minutes = 0;
    var hundreds = 0;
    var timerRunning = false;
    var timer;

    function startTimer() {
        timer = setInterval(incrementTimer, 10);
        startButton.innerText = "Stop";
    }

    function stopTimer() {
        clearInterval(timer)
        startButton.innerText = "Start";
    }

    function resetTimer() {
        seconds = 0;
        minutes = 0;
        hundreds = 0;
        secondsDisplay.innerHTML = "00";
        minutesDisplay.innerHTML = "00";
        hundredsDisplay.innerHTML = "00";
        timerRunning = false;
        clearInterval(timer);
        startButton.innerText = "Start";
    }

    function incrementTimer() {
        hundreds++;
        
        if(hundreds == 100) {
            seconds++;
            hundreds = 0;
        }
        if(seconds == 60) {
            minutes++;
            seconds = 0;
            hundreds = 0;
        }
        if(minutes == 60) {
            mintues = 0;
            seconds = 0;
            hundreds = 0;
        }

        hundredsDisplay.innerHTML = (hundreds < 10) ? "0" + hundreds : hundreds;
        secondsDisplay.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
        minutesDisplay.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    }

    startButton.onclick = function() {
        timerRunning = !timerRunning;
        timerRunning ? startTimer() : stopTimer();
    };
    resetButton.onclick = resetTimer;
}