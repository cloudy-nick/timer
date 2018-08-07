class Timer {
    constructor() {
        this.starting = 90000;
        this.interval = 10;
        this.time = this.starting;
        this.timer = undefined;
    }

    setTime(ms) {
        this.time = ms;

        // display new time
        const seconds = Math.floor((ms / 1000)).toFixed(0);
        const millis = ((ms % 1000) / 10).toFixed(0);
        document.getElementById("timer").innerHTML = `${seconds.padStart(2, '0')}:${millis.padStart(2, '0')}`;
    }

    decrementTimer(interval) {
        this.setTime(this.time - interval);
        if (this.time < 0) { // reset timer once it reaches 0
            this.reset();
        }
    }

    start() {
        const _this = this;
        if (!this.timer) { // make sure a timer isn't already running
            this.timer = setInterval(() => { _this.decrementTimer(_this.interval) }, _this.interval);
        }
    }

    stop() {
        this.killTimer();
    }
    
    reset() {
        this.killTimer();
        this.setTime(this.starting);
    }

    killTimer() {
        clearInterval(this.timer);
        this.timer = undefined;
    }
}

const timer = new Timer();
