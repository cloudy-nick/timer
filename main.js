class Stopwatch {
    constructor() {
        this.starting = 90000;
        this.interval = 10;
        this.time = this.starting;
    }

    setCurrentTime(ms) {
        this.time = ms;
    }

    getCurrentTime() {
        return this.time;
    }

    formatTime(ms) {
        const seconds = Math.floor((ms / 1000)).toFixed(0);
        const millis = ((ms % 1000) / 10).toFixed(0);
        return seconds.padStart(2, '0') + ':' + millis.padStart(2, '0');
    }

    decrementTimer(interval) {
        this.setCurrentTime(this.time - interval);
        if (this.getCurrentTime() < 0) {
            this.reset();
        }
        this.displayNewTime();
    }

    displayNewTime() {
        document.getElementById("timer").innerHTML = `${this.formatTime(this.getCurrentTime())}`;
    }

    start() {
        const _this = this;
        this.timer = setInterval(() => { _this.decrementTimer(_this.interval) }, _this.interval);
    }

    stop() {
        clearInterval(this.timer);
        this.displayNewTime();
    }

    reset() {
        clearInterval(this.timer);
        this.setCurrentTime(this.starting);
        this.displayNewTime();
    }
}

const watch = new Stopwatch();
