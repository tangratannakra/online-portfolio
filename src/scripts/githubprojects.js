const gitContainer = document.getElementById('github-projects');

let buildProject = (data) => {
    const projectContainer = document.createElement('div');
    projectContainer.className = 'github';
    gitContainer.appendChild(projectContainer);
    projectContainer.innerHTML = `
        <div class="github__title">
            <h1>
                <a href="${data.homepageUrl}" target="_blank">${data.name}</a>
            </h1>
        </div>
        <div class="github--description">
            <p>${data.description}</p>
        </div>
        `;
};

export default buildProject;


/* <div class="github__thumb"><img
            src="https://banner2.cleanpng.com/20180214/tow/kisspng-organization-child-enterprise-resource-planning-ma-square-shape-cliparts-5a849f82ab0459.4031530415186410267005.jpg"
            alt="" />
        </div> */