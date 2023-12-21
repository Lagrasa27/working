// Define a function named upper_lower using arrow function syntax with parameter str
const upper_lower = (str) => {
    // Check if the length of str is less than 3
    if (str.length < 3) {
        // Return str converted to uppercase
        return str.toUpperCase();
    }

    // Create front_part as a lowercase substring of the first 3 characters of str
    const front_part = str.substring(0, 3).toLowerCase();
    // Create back_part as a substring of str from index 3 to the end
    const back_part = str.substring(3);

    // Return the concatenation of front_part and back_part
    return front_part + back_part;
};

// Log the result of calling upper_lower with the argument "Python" to the console
console.log(upper_lower("Python"));

// Log the result of calling upper_lower with the argument "Py" to the console
console.log(upper_lower("Py"));

// Log the result of calling upper_lower with the argument "JAVAScript" to the console
console.log(upper_lower("JAVAScript"));