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
        .to("#animation-text-bottom", {
            opacity: 0.5,
            duration: 5,
            ease: 'back'
        }).call(timeLineHandler, null, '-=5')
        .to('.package', {
            opacity: 1,
            duration: 5,
            ease: 'back'
        }, '-=5');

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
        }, 0.3);

    tl.set('#R', {
            x: 300,
            y: -150,
            scale: 2
        }, 0.5)
        .set('#R', {
            x: 0,
            y: 0,
            scale: 1
        }, 1);

    tl.set('#O', {
            x: -150,
            y: 75
        }, 1.3)
        .set('#O', {
            x: 0,
            y: 0
        }, 1.75)
        .set('#O', {
            x: 50,
            y: 150
        }, 2)
        .set('#O', {
            x: 0,
            y: 0
        }, 2.4);

    tl.set('.N', {
            x: 0,
            y: -15
        }, 2.5)
        .set('.N', {
            x: 0,
            y: 0
        }, 2.8)
        .set('.N', {
            rotate: 180
        }, 3.2)
        .set('.N', {
            rotate: 90
        }, 3.6)
        .set('.N', {
            rotate: 0
        }, 3.8);

    tl.set('#E', {
            x: -300,
            y: -120
        }, 2)
        .set('#E', {
            x: 0,
            y: 0
        }, 2.75);

    tl.set('#D', {
            x: 50,
            y: -50
        }, 2.75)
        .set('#D', {
            x: 0,
            y: 0
        }, 3.1);
}

const scrollBtn = document.getElementById('scroller');

scrollBtn.addEventListener('click', () => {
    gsap.to(window, {
        duration: 0.5,
        scrollTo: "#bio"
    });
});