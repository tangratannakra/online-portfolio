import certData from './certificatesData';
import CertificateEntry from './certificatEntry';


const recentPrContainer = document.getElementById('certificates-container');

class RecentProjects {
    constructor() {
        this.buildPrList(certData);
    }

    buildPrList(data) {
        data.forEach(entry => {

            recentPrContainer.appendChild(new CertificateEntry(entry));
        });
    }
}

export default RecentProjects;