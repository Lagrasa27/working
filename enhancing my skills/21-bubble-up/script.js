const button = document.querySelector("button");
const ul = document.querySelector('ul');
const cuadro = document.querySelector('.square');
let para = document.querySelector('p');

// ul.remove();

button.addEventListener('click', () =>{
    // ul.innerHTML += '<li>something new</li>';
    const li = document.createElement('li');
    li.textContent = 'something new';
    ul.prepend(li);
//     ul.append(li);
//
//
});

button.addEventListener('click', () => {
    // console.log('you click the button');
});


/* whe you do a click event if the event is in a children tag it will bubble up to his parent  and if wan to stpo that we can use
e.stopPropagation();  // this method will stop the click even from bububling up the stopgrogation
* */

// const list = document.querySelectorAll('li');
// list.forEach(list =>{
//     list.addEventListener('click', e =>{
//         console.log('LI ')
//         e.stopPropagation();  // this method will stop the click even from bububling up the stopgrogation
//         // console.log(e.target);
//         // e.target.style.textDecoration = 'line-through';
//         // e.target.remove();
//     });
// });

ul.addEventListener('click', e =>{
   if ( e.target.tagName === 'LI'){
   }
    // e.target.remove();
});

cuadro.addEventListener('mousemove', (e) =>{
    // console.log(e);
    cuadro.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

//para
para.textContent += 'adding this text as wells';