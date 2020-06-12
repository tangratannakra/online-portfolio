import gsap from 'gsap';

const menuToggler = document.querySelector('.menu-hamburger__toggler');
const menuContent = document.querySelector('.heading-nav__menu');


menuToggler.addEventListener('change', menuTogglerHandler);

function menuTogglerHandler() {
    menuContent.classList.toggle('menu-visible');
}