import gsap from 'gsap/all';
import TextPlugin from 'gsap/TextPlugin';
import ScrollTo from 'gsap/ScrollToPlugin';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTo);

// window.onload = introHandler + hideInitial;
let tl = gsap.timeline();
let tl2 = gsap.timeline();
let played;

Promise.resolve(hideInitial()).then(() => {
    setTimeout(introHandler, 500);
});


function hideInitial() {
    tl.set(['.heading-nav__menu', '#my-name-intro', '#animation-text-bottom', '.package', '#animation-text-top', '#animation-text-bottom'], {
        opacity: 0
    });
}



function introHandler() {
    tl.to('#text-type-in-intro', {
            duration: 1,
            text: "My name is",
            ease: "none"
        }, 1)
        .to('#my-name-intro', {
            opacity: 1,
            duration: 0.8,
            ease: 'back'
        }).to('#my-name-intro', {
            opacity: 0.8,
            duration: 0.2,
            ease: 'back'
        })
        .to(['#text-type-in-intro', '#hi'], {
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, '-=1')
        .to('#animation-text-top', {
            opacity: 1,
            duration: 1,
            ease: 'back'
        })
        .to("#animation-text-bottom", {
            opacity: 0.5,
            duration: 5,
            ease: 'back'
        }).call(timeLineHandler, null, '-=3.5')
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
        }, 0.2)
        .set('#F', {
            x: 0,
            y: 0
        }, 0.4);

    tl.set('#R', {
            x: 300,
            y: -150,
            scale: 2
        }, 0.5)
        .set('#R', {
            x: 0,
            y: 0,
            scale: 1
        }, 0.9);

    tl.set('.N', {
            x: 0,
            y: -15
        }, 1.1)
        .set('.N', {
            x: 0,
            y: 0
        }, 1.5)
        .set('.N', {
            rotate: 180
        }, 1.8)
        .set('.N', {
            rotate: 90
        }, 2.3)
        .set('.N', {
            rotate: 0
        }, 2.5);
}

const scrollBtn = document.getElementById('scroller');

scrollBtn.addEventListener('click', () => {
    gsap.to(window, {
        duration: 0.5,
        scrollTo: "#bio"
    });
});

tl2.to('.heading-nav__menu', {
    opacity: 1,
    duration: 3
});