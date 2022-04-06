//declare variables 
const displayClicked = document.querySelector('[id*="prp_link"]');
console.log(displayClicked);
const showSurvey = document.getElementById('showSurvey');
const viewDetail = document.getElementsByClassName('view_detail');
const submitBtn = document.getElementById('submit-btn');

let surveyCompleted = Boolean;

let loadStorage = () => {
    surveyCompleted = localStorage.getItem('survey');

    if (surveyCompleted) {
        console.log('surveySeen');
        viewDetail.setAttribute('data-trigger-element-class', 'surveyComplete');
        return;
    } else {
        console.log('showSurvey');
        return;
    }
};

submitBtn.addEventListener('click', () => {
    console.log('surveycomplete');
    surveyCompleted = true;
    localStorage.setItem('survey', true);
    return;
});


loadStorage();

// also... 

// I need to set some Params/hashes... So how do we do that... 