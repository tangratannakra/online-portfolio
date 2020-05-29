import RecentProject from './recentProject';
import recentPrData from './recentPrData';

const recentPrContainer = document.getElementById('recentPr-container');

class RecentProjects {
    constructor() {
        this.buildPrList(recentPrData);
    }

    buildPrList(data) {
        data.forEach(entry => {

            recentPrContainer.appendChild(new RecentProject(entry));
        });
    }
}

export default RecentProjects;