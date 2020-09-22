class Now {
    constructor() {
    }
    get date() {return new Date();}
    get yyyy() {return this.date.getFullYear();}
    get mm() {
        let month = this.date.getMonth() + 1;
        if (month < 10)
            month = "0" + month;
        return month;
    }
    get dd() {
        let day = this.date.getDate();
        if (day < 10)
            day = "0" + day;
        return day;
    }
    get weekday() {
        let dayNum = this.date.getDay();
        let d;
        switch(dayNum) {
            case 0:
                d = "Sun";
                break;
            case 1:
                d = "Mon";
                break;  
            case 2:
                d = "Tue";
                break;
            case 3:
                d = "Wed";
                break;  
            case 4:
                d = "Thu";
                break;
            case 5:
                d = "Fri";
                break;  
            case 6:
                d = "Sat";
                break;
            default:
                d = "None Day";   
        }
        return d;
    }
    get currentDate() {return this.yyyy + "-" + this.mm + "-" + this.dd;}
    get hours() {
        let hour = this.date.getHours();
        if (hour < 10)
            hour = "0" + hour;
        return hour;
    }
    get minutes() {
        let minute = this.date.getMinutes();
        if (minute < 10)
            minute = "0" + minute;
        return minute;
    }
    get seconds() {
        let second = this.date.getSeconds();
        if (second < 10)
            second = "0" + second;
        return second;
    }
    get currentTime() {return this.hours + ":" + this.minutes + ":" + this.seconds;}
    get format() {    
        return this.currentDate + " " + this.currentTime;
    }
}