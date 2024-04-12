let user = {
    name: 'John Smith',
    email: 'johnSmith@gmail.com',
    age: 30,
    location: 'New York',
    blog: ['estamos aqui aprendiendo', 'hacer cosas nuevas'],
    login: function (){
        console.log('user logged in');
    },
    logout: function (){
        console.log('user logged out');
    },
    // you can also remove the parentesis  and word function and the function will still work.
    logBlog: function () {
        // console.log(this.blog);
        console.log('the user will read the following statements');
        this.blog.forEach(next => {
            console.log(next);
        });
    }
   

};

user.logBlog();
// console.log(this);


