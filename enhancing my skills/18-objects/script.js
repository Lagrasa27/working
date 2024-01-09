// down here we have  a list of object which is a different obeject with string;

let user = {
    name: 'jorge brito',
    email: 'jorge@yahoo.com',
    age: 30,
    location: 'DR',
    comment: [ {title:' here are some info inisde the the title', like:30 },
        {title:'here are some cars such with high quialty', like: 50},
        {mango:'son una mata de mango'}
    ],
    longin: function (){
        console.log('user logged in');
    },
    logout: function (){
        console.log('user logged out');
    },
    logComment: function () {
        this.comment.forEach((nex) => {
            console.log(nex.title, nex.like, nex.mango);
        });

    },
    klk: function (){
        console.log(this.age);
    }


};

// user.longin();
// user.logout();
user.logComment()
// user.klk();

// and now down here we gonna see object inside of array which is the forman mostlike which we going to be seeing

// const player ={
//
// //     makes:[
// //     {title: ' here are some info inisde the the title', like:30 },
// //     {cars: 'here are some cars such with high quialty', bran: 'audi, mercedes, toyota', years: 2023}
// //     ],
// //     logplayer(){
// //         this.makes.forEach(ken =>{
// //             console.log(ken.title, ken.like, ken.cars, ken.bran, ken.years)
// //         })
// //     }
// // };
// //
// // player.logplayer();


//example

console.log(Math.PI);

const area = 5.5;

console.log(Math.round(area));

console.log(Math);
