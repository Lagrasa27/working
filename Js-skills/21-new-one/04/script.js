// let mainPoint = 'first'
// let secondPoint = 'second'
//
// const mainFocus = (paper) => {
//     mainPoint += secondPoint + paper
// }
//
// const price = 'third'
// console.log(` ${mainPoint} ${secondPoint} here ${price}`);

let mainPoint = 'first'
let secondPoint = 'second'

const mainFocus = (paper) => {
    // The value of 'paper' is added to 'mainPoint'
    mainPoint += secondPoint + paper
    // 'secondPoint' is also modified (optional, but shows interaction)
    secondPoint = paper
}

// 💥 Call the function and pass a string value ('example') as the argument
// This value is received by the 'paper' parameter inside the function
mainFocus('example')

const price = 'third'

console.log(` ${mainPoint} ${secondPoint} here ${price}`);



// Function Definition
const calcMixer = (number1, number2, operation) => {
    // 💥 Your logic goes here!
    if (operation === "add") {
        return number1 + number2; // Returns the sum of number1 and number2
    } else if (operation === "multiply") {
        return number1 * number2; // Returns the product of number1 and number2
    } else {
        return "Invalid operation"; // Default for any other string
    }
};

// --- Test Your Function by Calling It ---

// 1. Pass 10 to number1, 5 to number2, and 'add' to operation
let result1 = calcMixer(10, 5, "add");

// 2. Pass 2 to number1, 8 to number2, and 'multiply' to operation
let result2 = calcMixer(2, 8, "multiply");

// 3. Test the invalid case
let result3 = calcMixer(5, 5, "divide");



console.log(`Result 1: ${result1}`); // Expected: 15
console.log(`Result 2: ${result2}`); // Expected: 16
console.log(`Result 3: ${result3}`); // Expected: Invalid operation