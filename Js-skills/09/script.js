const number = [1, 2, 3,4,5,6,7,8,9,10];

number.forEach(item => {
     let key = number.includes(item[3]);
    console.log(key);

})



const processArray = (array, callback, allowedValues) => {
    const result = []; // Initialize an empty array to store results

    // Use forEach to loop through the array
    array.forEach((element) => {
        // Only process if the element is in the allowedValues array
        if (allowedValues.includes(element)) {
            result.push(callback(element)); // Process the element and add it to the result
        }
    });

    return result; // Return the final array containing processed values
};

// Double function: multiplies a number by 2
const double = (num) => num * 2;

// Square function: squares a number
const square = (num) => num * num;

// Test with an array
const numbers = [1, 2, 3, 4, 5, 6];

// Define allowed values array
const allowedValues = [2, 4, 6];

// Using double function
const doubledResults = processArray(numbers, double, allowedValues);
console.log("Doubled Results (filtered by allowed values):", doubledResults);

// Using square function
const squaredResults = processArray(numbers, square, allowedValues);
console.log("Squared Results (filtered by allowed values):", squaredResults);