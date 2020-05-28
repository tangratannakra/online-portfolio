import cvData from './data/cvData';
import cvEntry from './cvEntry';
const cvContainer = document.getElementById('cv-container');

class cvList {
    constructor() {
        this.buildList(cvData);
    };

    buildList(data) {
        data.forEach(entry => {
            //const cvElement = new cvEntry(entry);
            cvContainer.appendChild(new cvEntry(entry));
        });
    }
}

export default cvList;