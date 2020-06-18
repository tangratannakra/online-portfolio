import gsap from 'gsap';
import ScrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from "gsap/ScrollTrigger";
import debounce from 'lodash/debounce';

gsap.registerPlugin(ScrollTo);
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

class Menu {
    constructor() {
        this.menuVisibility = true;
        this.browserHeight = window.innerHeight;
        this.browserWidth = window.innerWidth;
        this.menu = document.querySelector(`.heading-nav__menu`);
        this.menuItems = document.querySelectorAll('.scroll-to');
        this.menuToggler = document.querySelector('.menu-hamburger__toggler');
        this.hideMenuUnderFold();
        this.hideRevealMenu(); //working
        this.events();
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight;
            this.browserWidth = window.innerWidth;
        }, 333));
        this.menuItems.forEach(item => item.addEventListener('click', (item) => {
            this.scrollToHandler(item.target.id);
        }));
        this.menuToggler.addEventListener('change', () => {
            this.menuTogglerHandler();
        });
    }

    //GSAP Animation - hide / reveal menu after trigger element;    
    hideRevealMenu() {
        ScrollTrigger.create({
            trigger: "#bio",
            start: "top 100px",
            end: "top top-=10px",
            scrub: true,

            onEnter: () => {
                this.menu.style.display = 'none';
                this.menuVisibility = false;
            },
            onEnterBack: () => {
                this.menu.style.display = 'flex';
                this.menu.style.animation = 'none';
                this.menuVisibility = true;
            }
        });
    }

    //hide menu if page reloaded at the middle of the page
    hideMenuUnderFold() {
        if (this.menuVisibility === true) {
            if (window.scrollY > this.browserHeight) {
                this.menu.style.display = 'none';
                this.menuVisibility = false;
            }
        }
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
        } else {
            this.hideMenuUnderFold();
        }
    }

    menuTogglerHandler() {
        if (this.menuToggler.checked === true) {
            if (this.menuVisibility === false & window.innerWidth < 768) {
                this.menu.style.display = 'flex';
            }
            this.menu.classList.add('menu-visible');
        } else {
            this.menu.classList.remove('menu-visible');
            this.menuToggler = false;
        }
    }
}


export default Menu;