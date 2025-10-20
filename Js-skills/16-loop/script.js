

// for ( let i = 0; i <= 10; i++ ) {
//     if ( i === 5 ) break
//     console.log(i)
// }


const printName = {
    name: 'jorge',
    age: '',
}

console.log(printName.name && printName.age)



const truthyOrFalsy = num => {
    if (num === 8) {
        console.log('this is number 8')
    } else if (num !== 8){
        console.log('this is not number 8')
    } else {
        console.log('you must enter number 8')
    }
}

console.log(truthyOrFalsy(8))