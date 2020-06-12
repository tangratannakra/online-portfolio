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
    menuContent.classList.toggle('menu-visible');
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
            console.log('in');
            scrollposition = '#certificates';
            break;
        default:
    }

    gsap.to(window, {
        duration: 1,
        scrollTo: `${scrollposition}`
    });

}