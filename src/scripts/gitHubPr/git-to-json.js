var fs = require('fs');
const axios = require('axios');

let gitResponse;


//Fetching data from Github
const githubUrl = 'https://api.github.com/graphql';
const token = '66e9b9b476e1ce7bd215901f6bf4178a4025c5d0';
const oauth = {
    Authorization: 'bearer ' + token //'token'
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

function gitRequest() {
    axios.post(githubUrl, {
            query: query
        }, {
            headers: oauth
        })
        .then(function (response) {
            gitResponse = response.data.data.repositoryOwner.itemShowcase.items.edges;
            console.log(gitResponse);

            fs.writeFile("src/scripts/gitHubPr/gitData.json", JSON.stringify(gitResponse), function (err) {
                if (err) throw err;
                console.log('complete');
            });

        })
        .catch(function (error) {
            console.log(error);
        });
}

gitRequest();


// for (i=0; i <26 ; i++){
//    var obj = {
//        id: i,
//        square: i * i
//    }
//    data.table.push(obj)
// }



// const _writeJSON = (filename, data) => {
//     const filePath = path.resolve(__dirname, '../src/scripts/gitHubPr', filename);
//     fs.writeFileSync(filePath, data);
//     return filePath;
// };