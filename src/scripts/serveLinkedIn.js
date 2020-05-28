export const axios = require('axios');

//Fetching data from Github
const linkedInbUrl = 'https://api.linkedin.com/v1/people-search:(people:(1596067200,first-name,last-name,headline,picture-url,industry,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes)),num-results)?first-name=parameter&last-name=parameter';
//const token = '80b38618af5b02a0cb068d874ff080c24b01fc34';
// const oauth = {
//   Authorization: 'bearer ' + token
// };

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
export default axios.get(linkedInbUrl, {
        //query: query
    }, {
        //headers: oauth
    })
    .then(function (response) {
        console.log(response);
        //const gitProj = response.data.data.repositoryOwner.itemShowcase.items.edges; //arr
        //gitProj.forEach(prj => {
        //buildProject(prj.node);
        //});
    })
    .catch(function (error) {
        console.log(error);
    });