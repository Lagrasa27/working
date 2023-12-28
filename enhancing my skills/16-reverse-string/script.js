// Convert the provided JavaScript code to ES6

// Define a function named string_reverse with parameter str
const string_reverse = (str) => {
    // Use split, reverse, and join methods to reverse the characters of the string
    return str.split("").reverse().join("");
};

// Log the result of calling string_reverse with the argument "w3resource" to the console
console.log(string_reverse("w3resource"));

// Log the result of calling string_reverse with the argument "www" to the console
console.log(string_reverse("www"));

// Log the result of calling string_reverse with the argument "JavaScript" to the console
console.log(string_reverse("JavaScript"));