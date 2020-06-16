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

    const certificatesList = new CertificatesList();
    const revealCv = new RevealOnScroll("#cv-container", "#bio");
    const revealClients = new RevealOnScroll('.testimonial', '.tech-stack__ul');
    const recentPr = new RecentProjects;

    const cv = new cvList();
    // const gitHubPrjs = new gitHubProjects();
}