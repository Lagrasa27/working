const scores = [ 10,30,40,35,85,20,66,];

const  lookFirstresult = scores.find(score => score > 50);

console.log(lookFirstresult);

const paraf = document.querySelector('p');

paraf.innerText = 'retomando el ritmo';


const border = document.querySelector('.mano');

border.addEventListener('click', () => {
    console.log('you clicked me')
})



