import gsap from "gsap";
class RecentProject {
  constructor(data, index) {
    this.recentPrElement;
    this.revealMask;
    this.index = index;
    return this.buildProjectElement(data, this.index);
  }

  buildProjectElement(data) {
    this.recentPrElement = document.createElement('div');
    this.recentPrElement.setAttribute('id', `project-${this.index}`);
    this.recentPrElement.className = 'recentPr-entry';

    this.recentPrElement.innerHTML = `
    <div class="recentPr-entry__thumb">
    
      <img src="${data.thumb}" alt="project thumb">
    </div>
    
    <div class="recentPr-entry__hover">
      <div class="recentPr-entry__title">
      
        <h1><a href="${data.url}" target="__blank">${data.title}</a></h1>
      </div>
      <div class="recentPr-entry__description">
        <p>${data.description}</p>
      </div>
    </div>
    `;

    this.recentPrElement.addEventListener('mouseenter', () => {
      this.revealMask = this.recentPrElement.querySelector('.recentPr-entry__hover');
      this.revealHandler(this.index);
    });

    return this.recentPrElement;
  }

  revealHandler(index) {
    const tl = gsap.timeline();

    tl.set(`#project-${this.index}`, {

      x: -30,
    }).to(`#project-${this.index}`, {

      x: 0,
      duration: 1,
      ease: 'back'
    }, 0);
  }

}
export default RecentProject;

// <
// div id = "project-mask-` + this.index + `"
// class = "recentPr-entry__reveal-mask" > < /div>