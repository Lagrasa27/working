const myFunct = (callbackFunc) => {
    let value =50;
    callbackFunc(value);
}

myFunct( value => {
console.log(value );
});

// this is one option

let player = [ 'ken', 'pikachu', 'ryu', 'mario','toad'];



// player.forEach((person, index) => {
//
// console.log(index,person);
// });

// this is another option

const logPerson = (person, index) =>{
    console.log(` ${index} - Hello ${person} `);
};


player.forEach(logPerson);
