const object = {
    Make: 'Ford',
    Model: 'Mustang',
    Year: 1964,
    isused: true,
    makeNoise() {
        console.log('Vroom')
    }

}

const otherObject = {
    title: 'my second object',
    author: {
        name: 'Jorge',
        age: 25,
    }
}
console.log(otherObject.author.name)


function myFunction( a,b, callback) {
    callback(a, b)
}
function myFunct(sum){
    console.log(sum)
}

myFunction(10,20, myFunct)

let myGirl = (name, age) => {
    console.log(`My name is ${name} and I am ${age} years old`)
}
myGirl('Jorge', 25)

let myboy   = (name, callback) => {
    callback(name)
}

function myson(name){
    console.log(`My son is ${name}`)
}

myboy('Jorge', myson)