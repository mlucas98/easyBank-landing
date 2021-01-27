const hamburguer = document.querySelector('.header__hamburger');
console.log(hamburguer);
hamburguer.addEventListener('click', function() {
    console.log('click en el menu');
    if (this.classList.contains('open')) {
        this.classList.remove('open');
    } else {
        this.classList.add('open');
    }
});