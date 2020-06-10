import RecentProject from './recentProject';
import recentPrData from './recentPrData';


const recentPrContainer = document.getElementById('recentPr-container');

class RecentProjects {
    constructor() {
        this.buildPrList(recentPrData);
    }

    buildPrList(data) {
        data.forEach((entry, index) => {
            const recentPr = new RecentProject(entry, index);
            recentPrContainer.appendChild(recentPr);

        });
    }
}


export default RecentProjects;