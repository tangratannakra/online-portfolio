//Default imports
import '../styles/index.scss';

import cvList from './cvData/cvList';
import gitHubProjects from './gitHubPr/githubProjects';
import CertificatesList from './certificates/certificatesList';
import RecentProjects from './recentProjects/recentProjects';
import RevealOnScroll from './revealOnScroll';

// import {
//     gsap,
//     ScrollTrigger,
//     Draggable,
//     MotionPathPlugin
// } from "gsap/all";



// gsap.registerPlugin(ScrollTrigger);


const cv = new cvList();
const gitHubPrjs = new gitHubProjects();
const recentPr = new RecentProjects;
const certificatesList = new CertificatesList();
const revealCv = new RevealOnScroll("#cv-container", "#bio");

// gsap.to("#cv-container", {
//     scrollTrigger: {
//         trigger: "#bio",
//         start: "top top", // when the top of the trigger hits the top of the viewport
//     },
//     opacity: 1,
//     duration: 2
// });