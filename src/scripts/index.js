//Default imports
import '../styles/index.scss';

import animation from './redShift';
import toggler from './mainMenuToggle';
import cvList from './cvData/cvList';
import gitHubProjects from './gitHubPr/githubProjects';
import CertificatesList from './certificates/certificatesList';
import RecentProjects from './recentProjects/recentProjects';
import RevealOnScroll from './revealOnScroll';

document.addEventListener('DOMContentLoaded', timeLineHandler, false);

function timeLineHandler() {
    const recentPr = new RecentProjects;
    const certificatesList = new CertificatesList();
    const revealCv = new RevealOnScroll("#cv-container", ".heading-block__slogan");
    const revealClients = new RevealOnScroll('.testimonial', '.tech-stack__ul');

    const cv = new cvList();
    // const gitHubPrjs = new gitHubProjects();
}