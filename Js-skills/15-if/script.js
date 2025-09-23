const array = [1,2,3];

if (array.length === 0 ) {
    console.log('this is a short array')
} else if (array.length < 2) {
    console.log('this is a mid array')
} else if (array.length < 5) {
    console.log('this is a long array')
} else {
    console.log('enter a valid array')
}