const hi = document.querySelector('h1')

hi.innerText =  'hi there';

const aqui = document.querySelector('.here');

aqui.setAttribute('class', 'klk');

const plop = document.querySelector('.wey');

plop.setAttribute('style', 'color:green');

plop.style.margin = '50px';
plop.style.fontSize= '80px';


const content = document.querySelectorAll('p')

content.forEach(para =>{
    if (para.textContent.includes('likes')){
        para.classList.add('likes');
    }
    if( para.textContent.includes('hate')){
        para.classList.add('hate');
    }
});

