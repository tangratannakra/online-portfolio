//Default imports
import '../styles/index.scss';

import cvList from './cvData/cvList';
import gitHubProjects from './gitHubPr/githubProjects';
import CertificatesList from './certificates/certificatesList';
import RecentProjects from './recentProjects/recentProjects';
import RevealOnScroll from './revealOnScroll';
import animation from './redShift';

document.addEventListener('DOMContentLoaded', timeLineHandler, false);

function timeLineHandler() {
    const recentPr = new RecentProjects;
    const certificatesList = new CertificatesList();
    const revealCv = new RevealOnScroll("#cv-container", "#bio");
    const revealClients = new RevealOnScroll('.testimonial', '.tech-stack__ul');
    const revealProjects = new RevealOnScroll('.recent-projects', '.cv');

    const cv = new cvList();
    // const gitHubPrjs = new gitHubProjects();
}