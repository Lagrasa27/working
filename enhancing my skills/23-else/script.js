const pass = 'mario and ken@';

if (pass.length >= 14 && pass.includes('@!')){
    console.log('password is valid and strong');
} else if (pass.length >= 8 || pass.includes('$')) {
    console.log( 'password is valid ')
} else {
    console.log('password is not valid')
}

let positive = false;

if (positive){

}

console.log(false);
// this is the switch statment work very well y you can add additional case

let vehicle = 'b'

switch (vehicle){
    case "A,","a":
        console.log('new vehicle');
        break
    case "B","b":
        console.log(' mint vehicle');
        break
    case "C":
        console.log('very god vehicle');
        break
    case "D":
        console.log('good vehicle');
        break
    case "E":
        console.log('use vehicle');
        break
    case "F":
        console.log('very use vehicle');
        break
    case "G":
        console.log('use many miles vehicle');
        break
    default:
        console.log('vehicle no worth it');

}

let age = 50;

if (true){
    let age = 45;
    let car = 'auidi Q8';
    console.log('welcome inside of the scope', age,car);

    if (true){
        let age = 30;
        let car = 'vw golf';
        console.log('second scope still inside', age,car);
    }
}

console.log('outside of the global scope', age);