// let user = {
//     name: 'John Smith',
//     email: 'johnSmith@gmail.com',
//     age: 30,
//     location: 'New York',
//     blog: [
//         {tittle: 'John Smith', likes: 30 },
//         {tittle: 'little john', likes: 65 },
//
//     ],
//     login: function (){
//         console.log('user logged in');
//     },
//     logout: function (){
//         console.log('user logged out');
//     },
//     // you can also remove the parentesis  and word function and the function will still work.
//     logBlog: function () {
//         // console.log(this.blog);
//         console.log('the user will read the following statements');
//         this.blog.forEach(next => {
//             console.log(next.tittle, next.likes);
//         });
//     }
//
//
// };
//
// user.logBlog();
//
//
// let mami = ['casa','hitbox'];
//
// console.log(typeof mami);



//practicing call back
//down here

let master = (joel,nitido) => {
    console.log('hello')
    joel(),nitido();
}

let student = () => {
    console.log('good day')
}
let mami = () => {
    console.log('night')
}

master(student,mami);


let mango = () => 'hello word';

let result = mango();

console.log(result);



const personas = ['ken', 'setsuna', 'mario', 'bowser']

personas.forEach((personajes, index,) => {
    console.log(personajes,index);
    let result = personajes[index];
});


let mano = document.querySelectorAll('p');


mano.forEach(quieto =>{
    console.log(quieto.innerText)
    quieto.innerText = ' lo mas duro';
});


function processData(input, callback) {
    return callback(input);
}

function toUpperCase(str) {
    return str.toUpperCase();
}

// Using the function
console.log(processData("hello world", toUpperCase)); // Output: "HELLO WORLD"


setTimeout(() => console.log('hello'),3000)


const igloo = ['manita', 'jonathan', 'pichon']

igloo.forEach((nombres) => {
    console.log(nombres.toUpperCase())
});


const fox = (names, index) => {
    console.log(`${index} - hello mrs and ms ${names}`)
};

igloo.forEach(fox);