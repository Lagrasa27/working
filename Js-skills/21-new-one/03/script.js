// // global variable
// let money = 300
// let price = 100
//
// const getBig = (number) => {
//     money -= number;
// }
//
// const evenBigger = (number) => {
//  return money >= number;
// }




let money = 300; // Starts with $300
let price = 100; // First item price is $100

// Function 1: To reduce the money (like updateBudget)
const getBig = (number) => {
    money -= number;
}

// Function 2: To check if we have enough money (like canAfford)
const evenBigger = (number) => {
    return money >= number;
}

console.log(`Starting Money: $${money}`);
console.log('---------------------------');

// --- Item 1: Price $100 ---

console.log(`Checking if I can buy Item 1 (Price: $${price})...`);

// 1. We use IF to check the result of the evenBigger function!
if (evenBigger(price)) {
    // 2. If it returns TRUE (Yes, I can afford it)
    getBig(price);
    console.log(`I bought the item! Money left: $${money}`);
} else {
    // 3. If it returns FALSE (No, I cannot afford it)
    console.log("I can't afford that item right now.");
}

console.log('---------------------------');

// --- Item 2: Price $250 ---

// 4. Set a new, more expensive price
price = 250;

console.log(`Checking if I can buy Item 2 (Price: $${price})...`);

// 5. Repeat the check
if (evenBigger(price)) {
    // If it returns TRUE
    getBig(price);
    console.log(`I bought the item! Money left: $${money}`);
} else {
    // If it returns FALSE
    console.log("I can't afford that item right now.");
}
