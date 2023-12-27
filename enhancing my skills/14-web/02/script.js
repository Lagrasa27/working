let buttons = document.querySelectorAll('.submenu-toggle-button');

[].forEach.call(buttons, function(button) {
    button.addEventListener('click', function() {
        var submenu = button.parentNode.querySelector('.submenu');
        submenu.classList.toggle('open');
    });
});


