import gsap from 'gsap';
import ScrollTo from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTo);

const menuToggler = document.querySelector('.menu-hamburger__toggler');
const menuContent = document.querySelector('.heading-nav__menu');
const menuItems = document.querySelectorAll('.scroll-to');

menuToggler.addEventListener('change', menuTogglerHandler);

menuItems.forEach(item => item.addEventListener('click', (item) => {
    scrollRevealHandler(item);
}));


function menuTogglerHandler() {

    if (window.innerWidth <= 767) {
        menuContent.classList.toggle('menu-visible');
    }
}

function scrollRevealHandler(item) {
    let scrollposition;
    let position = item.target.id;

    switch (position) {
        case 'bio-trigger':
            scrollposition = '#bio';
            break;
        case 'projects-trigger':
            scrollposition = '#projects';
            break;
        case 'cv-trigger':
            scrollposition = '#certificates';
            break;
    }

    gsap.to(window, {
        duration: 1,
        scrollTo: `${scrollposition}`
    });

    menuContent.classList.toggle('menu-visible');
    menuToggler.checked = false;
}