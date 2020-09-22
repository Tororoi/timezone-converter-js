class Then {
    constructor(location) {
        this.location = location;
        Then.all.push(this);
    }

    get zoneObj() {return moment.tz(userNow.format, this.location);}
    get utc() {return this.zoneObj.utc();}
    get yyyy() {return this.utc.year();}
    get mm() {
        let month = this.utc.month() + 1;
        if (month < 10)
            month = "0" + month;
        return month;
    }
    get dd() {
        let day = this.utc.date();
        if (day < 10)
            day = "0" + day;
        return day;
    }
    get currentDate() {return this.yyyy + "-" + this.mm + "-" + this.dd;}
    get hours() {
        let hour = this.utc.hour();
        if (hour < 10)
            hour = "0" + hour;
        return hour;
    }
    get minutes() {
        let minute = this.utc.minute();
        if (minute < 10)
            minute = "0" + minute;
        return minute;
    }
    get seconds() {
        let second = this.utc.second();
        if (second < 10)
            second = "0" + second;
        return second;
    }
    get currentTime() {return this.hours + ":" + this.minutes + ":" + this.seconds;}
    get format() {    
        return this.currentDate + " " + this.currentTime;
    }
}