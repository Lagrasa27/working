const ul = document.querySelector('.people');

const people = ['setsuna', 'ken', 'mario', 'street', 'car'];


let html = ``;

people.forEach(function (person){
    html += `<li style="color:blue">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;