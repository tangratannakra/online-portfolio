import gsap from "gsap";

const tl = gsap.timeline();

class RecentPrHover {
    constructor(entry) {
        this.entry = entry;
        this.recentPojectsCollection = document.querySelector('.recentPr-entry');
    }
}



export default RecentPrHover;