import buildProject from './githubprojects';

//Fetching data from Github
const axios = require('axios');
const githubUrl = 'https://api.github.com/graphql';
const token = '80b38618af5b02a0cb068d874ff080c24b01fc34';
const oauth = {
  Authorization: 'bearer ' + token
};

// GraphQL query to Github API
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

// Making the call to Github
export default axios.post(githubUrl, {
    query: query
  }, {
    headers: oauth
  })
  .then(function (response) {
    const gitProj = response.data.data.repositoryOwner.itemShowcase.items.edges; //arr
    gitProj.forEach(prj => {
      buildProject(prj.node);
    });
  })
  .catch(function (error) {
    console.log(error);
  });