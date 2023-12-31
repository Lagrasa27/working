//example

let ken = 'mantequilla'

console.log(ken.toUpperCase());

let mouse = 'ryu-kart';

console.log(mouse.indexOf('k'));

let micky = 'exam';

console.log(micky.trim('x'));
//example
let email = 'jorgeken@gmail.com';

let result = email.includes('@');

console.log(result);

// example
let score = '100';

score = Number(score);
console.log(score+1)
console.log(typeof score);

//exmaple

for (i = 0; i < 5; i++){

}

console.log('this is the loop',i)

//example
//#Source https://bit.ly/2neWfJ2
const CSV_to_JSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
        .slice(data.indexOf('\n') + 1)
        .split('\n')
        .map(v => {
            const values = v.split(delimiter);
            return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
        });
};
console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

//example

i = 10

while( i < 30 ){
    console.log('loop',i)
    i++;
}

//example

const password = 'passord45';

if(password.length >= 12 ){
    console.log( 'password is very secure');
}else if (password.length >= 8){
    console.log('password is enough')
}else {
    console.log('password is not long enought')
}

//example
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