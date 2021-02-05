const hamburguer = document.querySelector('.header__hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

hamburguer.addEventListener('click', function() {
    if (header.classList.contains('open')) { // Close
        header.classList.remove('open');
        body.classList.remove('no-scroll');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else { // Open
        header.classList.add('open');
        body.classList.add('no-scroll');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});