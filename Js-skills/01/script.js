let myUniqueNumber = 3

const anchor = document.querySelector('a')

anchor.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
})

console.log(myUniqueNumber);

let a = 1
let b = 2
let c = 3

console.log(a)

const square = function(x) {
    return x * x;
};

console.log(square(12))


function printVariable(variable) {
    console.log(variable)
}

function sumVar(name, callback) {
    callback('Hello ' + name + '!')
}
sumVar('jorge',printVariable);