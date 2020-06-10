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
    <div id="project-mask-` + this.index + `" class="recentPr-entry__reveal-mask"></div>
      <img src="${data.thumb}"alt ="project thumb">
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
    // console.log(this.revealMask.className);
    console.log(index);

    tl.set(`#project-mask-${index}`, {
      opacity: 0,
      x: 320,
    }).to(`#project-mask-${index}`, {
      opacity: 0.4,
      x: 0,
      duration: 5,
      ease: 'back'
    }, 2);
  }

}
export default RecentProject;