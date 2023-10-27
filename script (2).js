let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

function toggleMenu() {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

menu.onclick = toggleMenu;
menu.ontouchstart = toggleMenu;
