import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

class RevealOnScroll {
    constructor(what, when) {
        this.revealElement = what;
        this.triggerElement = when;
        this.served = undefined;
        this.hideInitialy(this.revealElement);
        this.browserHeight = window.innerHeight;
        this.scrollThrottle = throttle(this.revealOnScroll, 200).bind(this);
        this.events();

    }

    hideInitialy() {
        const element = document.querySelector(this.revealElement);
        element.style.opacity = "0";
    }

    revealOnScroll() {
        let elementReveal = document.querySelector(`${this.revealElement}`);
        if (this.served === undefined) {
            if (window.scrollY + this.browserHeight > elementReveal.offsetTop) {
                let scrollPercent = (elementReveal.getBoundingClientRect().top / this.browserHeight) * 100;
                if (scrollPercent < 95) {

                    this.served = true;

                    gsap.to(`${this.revealElement}`, {
                        opacity: 1,
                        duration: 0.8
                    });


                }
            }
        }
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333));
    }
}

export default RevealOnScroll;