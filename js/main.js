'use strict';


var gNavLinks = document.querySelectorAll('.main-nav li a');

for (var i = 0; i < gNavLinks.length; i++) {
    gNavLinks[i].addEventListener('click', (ev) => {
        clearLinksClasses();
        ev.target.classList.add('active');
    })
}

function clearLinksClasses() {
    for (var i = 0; i < gNavLinks.length; i++) {
        gNavLinks[i].classList.remove('active');
    }
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}