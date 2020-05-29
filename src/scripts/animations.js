class AnimatedObject {
    constructor(classhandler, addClass) {
        this.addClassHandler(classhandler, addClass);
    }

    addClassHandler(classhandler, addClass) {
        console.log(classhandler);
        let toAnimateElement = document.querySelector(`.${classhandler}`);
        console.log(toAnimateElement);
        toAnimateElement.classList += ` ${addClass}`;
    }

    events() {

    }


}

export default AnimatedObject;