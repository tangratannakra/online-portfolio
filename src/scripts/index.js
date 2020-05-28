//Default imports
import '../styles/index.scss';

import cvList from './cvData/cvList';
import gitHubProjects from './gitHubPr/githubProjects';
import CertificatesList from './certificates/certificatesList';
import RevealOnScroll from './revealOnScroll';

import RecentProjects from './recentProjects/recentProjects';



const cv = new cvList();
const gitHubPrjs = new gitHubProjects();
const recentPr = new RecentProjects;
const certificatesList = new CertificatesList();