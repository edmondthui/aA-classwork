class Clock {
    constructor() {     
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();

        this.printTime();
        setInterval(this._tick.bind(this), 1000);
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        // 1. Increment the time by one second.
        this.seconds += 1;
        
        if (this.seconds >= 60) {
            this.minutes++;
            this.seconds = 0;
        }
        if (this.minutes >= 60) {
            this.hours++;
            this.minutes = 0;
        }
        if (this.hours >= 24) {
            this.hours = 0;
        }
        
        // 2. Call printTime.
        this.printTime();

    }
}

const clock = new Clock();

