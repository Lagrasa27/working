const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.querySelector('#username');
// this is one way to do it

form.addEventListener('submit', e => {
e.preventDefault();
// console.log(username.value);
//     console.log(form.username.value);


//validation
   const username = form.username.value;


   if (usernamePattern.test(username)) {
       //feedback good info
       feedback.textContent = 'that username is valid';
   } else {
       //help info user
       feedback.textContent = 'username must contain letter only 6 to 12 characters';
   }

});


// live feedback

form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value );
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success')
    } else {
        form.username.setAttribute('class', 'error')
    }
})


