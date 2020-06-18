import {
  default as response
} from './gitData';
import GitProject from './githubProject';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import gsap from 'gsap';

const gitContainer = document.getElementById('github-projects');
let served;

class GitHubContainer {
  constructor() {
    this.browserHeight = window.innerHeight;
    this.scrollThrottle = throttle(this.revealOnScroll, 200).bind(this);
    this.events();
  }

  revealOnScroll() {
    if (served === undefined) {
      if (window.scrollY + this.browserHeight > gitContainer.offsetTop) {
        let scrollPercent = (gitContainer.getBoundingClientRect().top / this.browserHeight) * 100;
        if (scrollPercent < 95) {
          served = true;
          this.gitRequest();
        }
      }
    }
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle);
    window.addEventListener("resize", debounce(() => {
      this.browserHeight = window.innerHeight;
    }, 333));
  }

  gitRequest() {
    response.forEach(prj => {

      let gitProject = new GitProject(prj.node);
      gitContainer.appendChild(gitProject);

      gsap.to('.github', {
        opacity: 1,
        duration: 1
      });

      // setTimeout(() => {
      //   gitProject.className = 'github reveal--is-visible';
      // }, 1000);

    });





  };
}



export default GitHubContainer;