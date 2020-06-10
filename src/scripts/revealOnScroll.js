import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);


class RevealOnScroll {
    constructor(what, when) {
        this.hideInitialy(what);
        this.reveal(what, when);
    }

    hideInitialy(what) {
        const element = document.querySelector(what);
        element.style.opacity = "0";
    }

    reveal(what, when) {

        gsap.to(`${what}`, {
            scrollTrigger: {
                trigger: `${when}`,
                start: "top top", // when the top of the trigger hits the top of the viewport
            },
            opacity: 1,
            duration: 1
        });
    }


}

export default RevealOnScroll;