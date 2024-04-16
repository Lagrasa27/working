const list = document.querySelectorAll('li')


console.log(list)

list.forEach((lista) =>{
    lista.addEventListener('click', (e)=>{
        console.log(e.target);
    })

})