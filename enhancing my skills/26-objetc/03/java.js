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


