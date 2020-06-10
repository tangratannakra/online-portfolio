import gsap from 'gsap/all';
import TextPlugin from 'gsap/TextPlugin';
import ScrollTo from 'gsap/ScrollToPlugin';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTo);

window.onload = introHandler;
let tl = gsap.timeline();
let played;

function introHandler() {
    //hiding the initial vales from the css
    tl.set(['#my-name-intro', '#animation-text-bottom', '.package', '#animation-text-top', '#animation-text-bottom'], {
            opacity: 0
        }).to('#text-type-in-intro', {
            duration: 2,
            text: "My name is",
            ease: "none"
        }, 1)
        .to('#my-name-intro', {
            opacity: 1,
            duration: 1,
            ease: 'back'
        })
        .to(['#text-type-in-intro', '#hi'], {
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
        .to('#animation-text-top', {
            opacity: 1,
            duration: 1,
            ease: 'back'
        })
        .set("#animation-text-bottom", {
            opacity: 0.5,
            duration: 5,
            ease: 'back'
        })
        .to('.package', {
            opacity: 1,
            duration: 5,
            ease: 'back'
        }).call(timeLineHandler, null, '-=3');

}


function timeLineHandler() {
    let tl = gsap.timeline();

    tl.set('#F', {
            x: -100,
            y: 50
        }, 0)
        .set('#F', {
            x: 0,
            y: 0
        }, 0.5);

    tl.set('#R', {
            x: 300,
            y: -150,
            scale: 2
        }, 1)
        .set('#R', {
            x: 0,
            y: 0,
            scale: 1
        }, 1.5);

    tl.set('#O', {
            x: -150,
            y: 75
        }, 1.75)
        .set('#O', {
            x: 0,
            y: 0
        }, 2.1)
        .set('#O', {
            x: 50,
            y: 150
        }, 2.4)
        .set('#O', {
            x: 0,
            y: 0
        }, 2.6);

    tl.set('.N', {
            x: 0,
            y: -15
        }, 3.85)
        .set('.N', {
            x: 0,
            y: 0
        }, 4.2)
        .set('.N', {
            rotate: 180
        }, 4.4)
        .set('.N', {
            rotate: 90
        }, 4.6)
        .set('.N', {
            rotate: 0
        }, 4.8);

    tl.set('#E', {
            x: -300,
            y: -120
        }, 4.5)
        .set('#E', {
            x: 0,
            y: 0
        }, 4.75);

    tl.set('#D', {
            x: 50,
            y: -50
        }, 3.75)
        .set('#D', {
            x: 0,
            y: 0
        }, 4.1);
}

const scrollBtn = document.getElementById('scroller');

scrollBtn.addEventListener('click', () => {
    gsap.to(window, {
        duration: 0.5,
        scrollTo: "#bio"
    });
});