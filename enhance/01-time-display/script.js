// get the current date and time
const today = new Date();

// get the day of the week (0-6, where 0 is sunday and 6 is saturday)
const day = today.getDay();

//array of day names
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log(`today is: ${daylist[day]}`);

// Get the Current hour, minute, and second
let hour = today.getHours();
const minute = today.getMinutes()
const second = today.getSeconds()

// Determine if it's AM or PM
let prepand = (hour >=12) ? " PM ": " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0 and it's PM
if (hour === 0 && prepand === ' PM ') {
    // Check if minute and second are also 0
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0 and it's AM
if (hour === 0 && prepand === ' AM ') {
    // Check if minute and second are also 0
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
console.log(`Current Time: ${hour}${prepand} : ${minute} : ${second}`);