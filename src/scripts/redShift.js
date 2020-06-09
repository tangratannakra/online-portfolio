import gsap from 'gsap/all';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const tl = gsap.timeline();
let played;

document.addEventListener('mousemove', () => {
    if (!played) {
        played = true;
        timeLineHandler();
    }
}, false);

//hiding the initial vales from the css
tl.set(['#animation-text-bottom', '.package'], {
    opacity: 0
});


//on mouse move
function timeLineHandler() {
    tl.to("#animation-text-bottom", {
        opacity: 0.5,
        duration: 5,
        ease: 'back'
    }, 0);

    tl.to('.package', {
        opacity: 1,
        duration: 5,
        ease: 'back'
    }, 3);

    //do this for the Keywords
    tl.to('.heading-block__keywords', {
        duration: 2,
        text: "UX / UI Engineer",
        ease: "none"
    }, 5);



    //Letters Flickering
    tl.set('#F', {
            x: -100,
            y: 50
        }, 1.8)
        .set('#F', {
            x: 0,
            y: 0
        }, 2.5);

    tl.set('#R', {
            x: 300,
            y: -150,
            scale: 2
        }, 3.25)
        .set('#R', {
            x: 0,
            y: 0,
            scale: 1
        }, 3.5);

    tl.set('#O', {
            x: -150,
            y: 75
        }, 3.75)
        .set('#O', {
            x: 0,
            y: 0
        }, 4.1)
        .set('#O', {
            x: 50,
            y: 150
        }, 4.4)
        .set('#O', {
            x: 0,
            y: 0
        }, 4.6);

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