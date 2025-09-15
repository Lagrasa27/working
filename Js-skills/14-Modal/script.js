const modal = document.querySelector('#modal');
const btn = document.querySelector('#open-modal-btn');
const closeBtn = document.querySelector('#close-modal-btn');
const overlay = document.querySelector('#overlay');

btn.addEventListener('click', () => {
    modal.classList.add('open');
    overlay.classList.add('open');

})

closeBtn.addEventListener('click', () => {
    closeptn();
})

overlay.addEventListener('click', () => {
    closeptn();
})

function closeptn (){
modal.classList.remove('open');
overlay.classList.remove('open');
}