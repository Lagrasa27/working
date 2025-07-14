// const btn = document.querySelector('[data-btn]');
//
// function printClick() {
//     console.log('clicked');
// }
//
// btn.addEventListener('click', printClick)
//
// btn.removeEventListener('click', printClick)

const btinput = document.querySelector('[data-input]');

btinput.addEventListener('click', (e) => {
    console.log('input');
});

// This is like Mom making a promise
function cleanRoom(whenFinished) {
    console.log("Starting to clean the room... 🧹");

    // Pretend it takes some time to clean
    setTimeout(function() {
        console.log("Room is clean! ✨");
        // Now Mom gives you ice cream (this is the callback)
        whenFinished("Here's your ice cream! 🍦");
    }, 2000);
}

// Let's clean the room and get ice cream
cleanRoom(function(reward) {
    console.log(reward);
});