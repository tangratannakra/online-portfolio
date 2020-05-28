//Default imports
import '../styles/index.scss';
import axiosCall from './serveGithub'; //github fetch
import cvList from './cvList';

const secondSection = document.getElementById('second');
// /console.log(secondSection)
let addCvList;

secondSection.addEventListener('scroll', () => {
    if (addCvList === undefined) {
        addCvList = true;
        const cv = new cvList();
    }
});