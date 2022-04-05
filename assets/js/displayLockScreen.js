//declare variables 
const displayClicked = document.querySelector('[id*="wpl_prp_cont"]');
const showSurvey = document.getElementById('showSurvey');

let detailClickedCount = 0;
let detailCountMax = 3;
let surveyCompleted = false;

let loadStorage = () => {
    pv = localStorage.getItem('presentValue');
    surveyCompleted = localStorage.getItem('survey');
    detailClickedArr = localStorage.getItem('detailClickedCount');

    if (detailClickedArr >= 3) {
        startSurvey();
        return;
    } else {
        return;
    }
};

let detailClicked = () => {
    detailClickedCount++;
    localStorage.setItem('detailClickedCount', detailClickedCount);

    if (detailClickedCount >= detailCountMax ) {
        startSurvey();
    } else {
        return;
    }
}

let startSurvey = () => {
    if (!surveyCompleted) {
        showSurvey.setAttribute('style', 'display: block;');
    completeSurvey();
    return;
    }
    else {
        return;
    }
}

let completeSurvey = () => {
    document.getElementById('surveyComplete').addEventListener('click', () => {
        showSurvey.setAttribute('style', 'display: none');
        surveyCompleted = true;
        localStorage.setItem('survey', surveyCompleted);
        return;
    });
}
loadStorage();

displayClicked.addEventListener('click', detailClicked);

