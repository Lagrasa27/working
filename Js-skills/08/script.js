const a = [1,2]
const elementoADD = 3
add(a, elementoADD)

console.log(a)

function add(array,element) {
    array.push(element)
}

function processArray(array, callback) {
    // Loop through the array and call the callback for each element
    for (let i = 0; i < array.length; i++) {
        console.log(callback(array[i]));
    }
}

// Create a double function: multiplies a number by 2
function double(num) {
    return num * 2;
}

// Create a square function: squares a number
function square(num) {
    return num * num;
}

// Test with an array
const numbers = [1, 2, 3, 4];

console.log("Using double function:");
processArray(numbers, double);
K
console.log("Using square function:");
processArray(numbers, square);

// const processArray = (array, callback) => {
//     // Loop through the array and call the callback for each element
//     for (let i = 0; i < array.length; i++) {
//         console.log(callback(array[i]));
//     }
// };
//
// // Double function: multiplies a number by 2 (arrow function)
// const double = (num) => num * 2;
//
// // Square function: squares a number (arrow function)
// const square = (num) => num * num;
//
// // Test with an array
// const numbers = [1, 2, 3, 4];
//
// console.log("Using double function:");
// processArray(numbers, double);
//
// console.log("Using square function:");
// processArray(numbers, square);