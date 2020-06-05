import gsap from 'gsap';

const tl = gsap.timeline(
    //     {
    //     repeat: 5,
    //     repeatDelay: 1
    // }
);


tl.set("#animation-text-bottom", {
    opacity: 0.5,
    duration: 5,
    ease: 'back'
});


tl.set('.animation-wrapper', {
        scale: 1.3,
        ease: "easeOut"
    })
    .to('.animation-wrapper', {
        scale: 1,
        duration: 10,
        ease: "easeOut"
    }, 0);


tl.set('.animation-wrapper', {
        opacity: 0.2
    }, 0)
    .to('.animation-wrapper', {
        opacity: 1
    }, 1)
    .set('.animation-wrapper', {
        x: -40,
        y: 30
    }, 2)
    .set('.animation-wrapper', {
        x: 0,
        y: 0
    }, 3);


tl.set('#F', {
        x: -100,
        y: 50
    }, 3.9)
    .set('#F', {
        x: 0,
        y: 0
    }, 4.1);

tl.set('#R', {
        x: 300,
        y: -150,
        scale: 2
    }, 5.25)
    .set('#R', {
        x: 0,
        y: 0,
        scale: 1
    }, 5.5);

tl.set('#O', {
        x: -150,
        y: 75
    }, 4.75)
    .set('#O', {
        x: 0,
        y: 0
    }, 5.1)
    .set('#O', {
        x: 50,
        y: 150
    }, 5.4)
    .set('#O', {
        x: 0,
        y: 0
    }, 5.6);

tl.set('.N', {
        x: 0,
        y: -15
    }, 4.85)
    .set('.N', {
        x: 0,
        y: 0
    }, 5.2)
    .set('.N', {
        rotate: 180
    }, 5.4)
    .set('.N', {
        rotate: 90
    }, 5.6)
    .set('.N', {
        rotate: 0
    }, 5.8);

tl.set('#E', {
        x: -300,
        y: -120
    }, 5.5)
    .set('#E', {
        x: 0,
        y: 0
    }, 5.75);

tl.set('#D', {
        x: 50,
        y: -50
    }, 4.75)
    .set('#D', {
        x: 0,
        y: 0
    }, 5.1);