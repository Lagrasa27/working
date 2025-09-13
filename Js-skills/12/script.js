const button = document.querySelectorAll('button');

button.forEach(button =>
    button.addEventListener('click', (event) => {
        console.log(parseInt(button.dataset.clicks))
    }))

