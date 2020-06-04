import GitProject from './githubProject';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

const gitContainer = document.getElementById('github-projects');

//Fetching data from Github
const axios = require('axios');
const githubUrl = 'https://api.github.com/graphql';
const token = '9bab1c3f56c0c8dbfc69c088c6894cb004f18e11';
const oauth = {
  Authorization: 'bearer ' + token
};

let served;
const query = `{
    repositoryOwner(login: "tangratannakra") {
      ... on ProfileOwner {
        pinnedItemsRemaining
        itemShowcase {
          items(first: 10) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  homepageUrl
                  languages(first: 10) {
                    totalCount
                  }
                }
              }
            }
          }
          hasPinnedItems
        }
      }
    }
  }`;

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
    axios.post(githubUrl, {
        query: query
      }, {
        headers: oauth
      })
      .then(function (response) {
        const gitProj = response.data.data.repositoryOwner.itemShowcase.items.edges; //arr

        gitProj.forEach(prj => {
          let gitProject = new GitProject(prj.node);
          gitContainer.appendChild(gitProject);
          setTimeout(() => {
            gitProject.className = 'github reveal--is-visible';
          }, 1000);

        });

      })
      .catch(function (error) {
        console.log(error);
      });


  };

}

export default GitHubContainer;