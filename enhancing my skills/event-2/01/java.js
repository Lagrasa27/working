const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
// this is one way to do it

form.addEventListener('submit', e => {
e.preventDefault();
// console.log(username.value);
    console.log(form.username.value);
});


//testing regex
const username = 'setsuna'
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username);

if (result){
    console.log('info correct')
} else {
    console.log('error correct')
}


// const calla  = document.querySelector('.calla');
//
// calla.innerText = 'manitopapa';
//
