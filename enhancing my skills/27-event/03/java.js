const caja = document.querySelector('div');

caja.addEventListener('mousemove', (e) => {
    caja.textContent =` x ${e.offsetX}: and Y ${e.offsetY}`;
});


const ulista = document.querySelector('ul');

ulista.addEventListener('click', (e) => {
   e.target.innerHTML = 'aqui es la cosa ';
});