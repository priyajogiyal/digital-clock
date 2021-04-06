'use strict';
setInterval(function () {
        const clock = document.getElementById('clock');
        const currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        const prepend = hours >= 12 ? 'PM' : 'AM';
        hours = hours >= 12 ? hours - 12 : hours;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        if (hours === 0 && prepend === 'PM') {
            if (minutes === 0 && seconds === 0) {
                hours = 12;
                prepend = 'Noon';
            }
            else {
                hours = 12;
                prepend = 'PM'
            }
        }
        if (hours === 12 && prepend === 'AM') {
            if (minutes === 0 && seconds === 0) {
                hours = 12;
                prepend = 'Midnight';
            }
            else {
                hours = 12;
                prepend = 'AM';
            }
        }
        
        const clockTime = ` ${hours}:${minutes}:${seconds}${prepend}`;
        clock.innerText = clockTime;    
}, 1000);

const fullDate = document.getElementById('divdate');
const today = new Date();
const day = today.getDay();
const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = today.getDate();
const month = today.getMonth();
const monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'october', 'November', 'December'];
const year = today.getFullYear();
const getFullDate = `${daylist[day]}, ${date} ${monthlist[month]} ${year}`;
divdate.innerText = getFullDate;