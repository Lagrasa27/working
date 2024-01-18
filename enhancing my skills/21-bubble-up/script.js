const button = document.querySelector("button");
const ul = document.querySelector('ul');

// ul.remove();

button.addEventListener('click', () =>{
    // ul.innerHTML += '<li>something new</li>';
    const li = document.createElement('li');
    li.textContent = 'something new';
    // ul.prepend(li);
    ul.append(li);


});

button.addEventListener('click', () => {
    console.log('you click the button');
});

const list = document.querySelectorAll('li');



list.forEach(list =>{
    list.addEventListener('click', e =>{
        console.log('you click the list ')
        console.log(e.target);
        e.target.style.textDecoration = 'line-through';
        // e.target.remove();
    });
});