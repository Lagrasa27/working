const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');
// this is one way to do it

form.addEventListener('submit', e => {
e.preventDefault();
// console.log(username.value);
//     console.log(form.username.value);


//validation
   const username = form.username.value;
   const usernamePattern = /^[a-zA-Z]{6,12}$/;

   if (usernamePattern.test(username)) {
       //feedback good info
       feedback.textContent = 'that username is valid';
   } else {
       //help info user
       feedback.textContent = 'username must contain letter only 6 to 12 characters';
   }

});



