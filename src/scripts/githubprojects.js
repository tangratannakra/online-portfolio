import gitProject from './githubProject';
import throttle from 'lodash/throttle';
//import gitRequest from './serveGithub-delete'; //github fetch

const gitContainer = document.getElementById('github-projects');

//Fetching data from Github
const axios = require('axios');
const githubUrl = 'https://api.github.com/graphql';
const token = '80b38618af5b02a0cb068d874ff080c24b01fc34';
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

class gitHubContainer {
    constructor() {
        this.scrollThrottle = throttle(this.revealOnScroll, 200).bind(this);
        this.events();
    }

    revealOnScroll() {
        if (served === undefined) {
            let scrollPercent = (gitContainer.getBoundingClientRect().y / window.innerHeight) * 100;
            if (scrollPercent < 90) {
                served = true;
                this.gitRequest();
            }
        }
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
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
                    gitContainer.appendChild(new gitProject(prj.node));
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

export default gitHubContainer;