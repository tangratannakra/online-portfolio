import cvData from './data/cvData';
import cvEntry from './cvEntry';
import throttle from 'lodash/throttle';

const cvContainer = document.getElementById('cv-container');
let reveal;

class cvList {
    constructor() {
        this.scrollThrottle = throttle(this.revealOnScroll, 200).bind(this);
        this.events();
    };

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
    }

    revealOnScroll() {
        if (reveal === undefined) {
            let scrollPercent = (cvContainer.getBoundingClientRect().y / window.innerHeight) * 100;
            if (scrollPercent < 75) {
                reveal = true;
                this.buildList(cvData);
            }
        }
    }

    buildList(data) {
        data.forEach(entry => {

            cvContainer.appendChild(new cvEntry(entry));
        });
    }
}

export default cvList;