// Use the `const` keyword for constants and the `let` keyword for variables
const today = new Date();
const cmas = new Date(today.getFullYear(), 11, 25);

// Check if the current date is after December 25th
if (today.getMonth() === 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

// Calculate the difference in days and log the result
const one_day = 1000 * 60 * 60 * 24;
console.log(`${Math.ceil((cmas.getTime() - today.getTime()) / one_day)} days left until Christmas!`);