const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', ()  => {
    popup.style.display = 'block';
});

close.addEventListener('click', ()  => {
    popup.style.display = 'none';
});

popup.addEventListener('click', ()  => {
    popup.style.display = 'none';
});

const parrafo = document.querySelector('.aqui');

parrafo.textContent = 'esto es el especial que ahy';

const wepa = document.querySelector('.mio');

wepa.innerHTML = "<h2> 'let's go </h2> "
