import gsap from 'gsap';
import ScrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTo);
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const menuToggler = document.querySelector('.menu-hamburger__toggler');
const menuContent = document.querySelector('.heading-nav__menu');
const menuItems = document.querySelectorAll('.scroll-to');

let menuVisibility;

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
        case 'cert-trigger':
            scrollposition = '#certificates';
            break;
        case 'contact-trigger':
            scrollposition = '#contacts';
            break;
    }

    gsap.to(window, {
        duration: 1,
        scrollTo: `${scrollposition}`
    });


    if (window.innerWidth <= 767) {
        menuContent.classList.toggle('menu-visible');
        menuToggler.checked = false;
    }
}


function hideRevealMenu() {
    ScrollTrigger.create({
        trigger: "#bio",
        start: "top 100px",
        end: "top top-=10px",
        scrub: true,

        onEnter: () => {
            menuContent.style.display = 'none';
        },
        onEnterBack: () => {
            menuContent.style.display = 'flex';
            menuContent.style.animation = 'none';
        }
    });
}

hideRevealMenu();