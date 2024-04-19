const ulist = document.querySelector('ul');

// const list = document.querySelectorAll('li');

const boton = document.querySelector('button');

// console.log(list)



// list.forEach((lista) =>{
//     lista.addEventListener('click', (e)=>{
//         console.log(e.target);
//     })
//
// })

boton.addEventListener('click', ()=>{
    //ul.innerHTML += ' <li> something new </li> you can do it this way as well
   const li = document.createElement('li');
   li.textContent = 'here we go!';
   // ulist.append(li);
    ulist.prepend(li);
});


ulist.addEventListener('click', e =>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});