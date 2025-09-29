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

const favoriteAnimal = 'cow'

switch (favoriteAnimal) {
    case 'cow':
        console.log('this animal is big');
        break;
    case 'cat':
        console.log('this animal is flofy');
        break;


}

const number = 6

switch (number) {
    case 0:
        console.log('it iz zero')
        break;
        case 1:
        case 2:
            console.log('this is small')
        break;
    case 3:
    case 4:
        console.log('this is it is medium')
        break;
        case 5:
            console.log('this is it is large')
        break;

            default:
                console.log('try again')
}