let user = {
    name: 'John Smith',
    email: 'johnSmith@gmail.com',
    age: 30,
    location: 'New York',
    blog: ['estamos aqui aprendiendo', 'hacer cosas nuevas'],

};

// in order to acces to specific value at objet you can use dot .
// or sqare bracket but must be in string



console.log(user);
console.log(user.name);
console.log(user['location']);
console.log(typeof user);



 function ken() {
    console.log('hello')
};

ken();



let roy = (daytime = 'morning', nighttime = 'night') => {
    console.log(`today in the ${daytime} i ate all the way to ${nighttime}`);
};

roy();


let car = () =>{
    console.log( 'here I am');

};

car();


