import gsap from 'gsap';
import ScrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from "gsap/ScrollTrigger";
import debounce from 'lodash/debounce';

gsap.registerPlugin(ScrollTo);
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

class Menu {
    constructor() {
        this.browserHeight = window.innerHeight;
        this.browserWidth = window.innerWidth;

        this.menu = document.querySelector(`.heading-nav__menu`);
        this.menuItems = document.querySelectorAll('.scroll-to');
        this.menuToggler = document.querySelector('.menu-hamburger__toggler');

        this.events();
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight;
            this.browserWidth = window.innerWidth;
            if (this.menu.classList.contains('menu-visible') && this.browserWidth > 768) {
                this.menu.classList.remove('menu-visible');
            } else if (this.menuToggler.checked && this.browserWidth < 768) {
                this.menu.classList.add('menu-visible');
            }
        }, 333));
        this.menuItems.forEach(item => item.addEventListener('click', (item) => {
            this.scrollToHandler(item.target.id);
        }));
        this.menuToggler.addEventListener('change', () => {
            this.menuTogglerHandler();
        });
    }


    //scrolTo positions when cliched on menu
    scrollToHandler(itemID) {
        let scrollposition;
        let position = itemID;

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
            duration: 0.5,
            scrollTo: `${scrollposition}`
        });

        if (window.innerWidth < 768) {
            this.menu.classList.remove('menu-visible');
            this.menuToggler.checked = false;
        }
    }

    menuTogglerHandler() {

        if (this.browserWidth < 768 && this.menuToggler.checked === true) {
            this.menu.classList.add('menu-visible');

        } else {
            this.menu.classList.remove('menu-visible');
            this.menuToggler.checked = false;
        }

    }
}


export default Menu;