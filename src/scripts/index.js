//Default imports
import '../styles/index.scss';

import cvList from './cvData/cvList';
import gitHubProjects from './gitHubPr/githubProjects';
import CertificatesList from './certificates/certificatesList';
import RecentProjects from './recentProjects/recentProjects';
import RevealOnScroll from './revealOnScroll';

const cv = new cvList();
const gitHubPrjs = new gitHubProjects();
const recentPr = new RecentProjects;
const certificatesList = new CertificatesList();
const revealCv = new RevealOnScroll("#cv-container", "#bio");
const revealClients = new RevealOnScroll('.testimonial', '.tech-stack__ul');
const revealAboutMe = new RevealOnScroll('.about-me__heading', '.heading-block__subtitle');