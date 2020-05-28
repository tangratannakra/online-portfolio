class gitProject {
    constructor(data) {
        return this.buildGitEntry(data);
    }

    buildGitEntry(data) {
        const projectContainer = document.createElement('div');
        projectContainer.className = 'github';
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

        return projectContainer;
    }
}

export default gitProject;

/* <div class="github__thumb"><img
            src="https://banner2.cleanpng.com/20180214/tow/kisspng-organization-child-enterprise-resource-planning-ma-square-shape-cliparts-5a849f82ab0459.4031530415186410267005.jpg"
            alt="" />
        </div> */