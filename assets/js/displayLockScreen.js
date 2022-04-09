//declare variables 
const showSurvey = document.getElementById('showSurvey');
const formEl = document.getElementById('formId');
const modalTextContentBefore = document.getElementById('modal-text-content-before');
const modalHeading = document.getElementById('modal-heading-content');
const modalBody = document.getElementById('modal-body-content');

let emailSurvey, emailSurveyChild;

let surveyCompleted = Boolean;

let loadStorage = () => {
    // get whether surveyCompleted is true or false from localStorage();
    surveyCompleted = localStorage.getItem('survey');

    if (surveyCompleted) {
        console.log('surveySeen');
            showSurvey.setAttribute('hidden', true);
            console.log('localStorage', localStorage);
        return;
    } else {
        console.log('showSurvey');
        return;
    }
};

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailEl = document.getElementById('email').value;
    emailSurvey = document.getElementById('email-survey');
    emailSurveyChild = emailSurvey.firstChild;
    console.log('emailSurvey', emailSurvey);
    console.log('emailSurveyChild', emailSurveyChild);
    emailSurveyChild.setAttribute('data-trigger-element-class', 'surveySeen');

    if (validateEmail) {
        localStorage.setItem('email', emailEl);
        
        // submit data to update DB? 
        async function sendForm (url='', data = {}) {

            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'omit',
                refererPolicy: 'strict-origin-when-cross-origin',
                body: JSON.stringify(data)
            });
                return response.json();
            }
          
        sendForm('https://hooks.zapier.com/hooks/catch/9671423/b8up9vj/', emailEl)
            .then(data => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            });
            // set surveyCompleted to be true and push to local storage:
            surveyCompleted = true;
            localStorage.setItem('survey', true);
            // showSurvey.setAttribute('hidden', true);
            // emailSurvey.setAttribute('hidden', true);
            refreshPage();
            return;
            // window.location.href = 'https://rentcalculator.com/properties' + '?widget_id=2&kind=0&sf_unit_price=260&sf_min_price=0&sf_max_price=' + pv + '&wplorderby=p.price_si&wplorder=DESC&wplpage=1';
        // hideForm();
    } else {
        alert('must enter a valid email address');
        return;
    };
});

let validateEmail = (emailEl) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailEl).toLowerCase());
  }
setTimeout(() => {console.log('Data Has Loaded')}, 5000);

let refreshPage = () => {
    formEl.setAttribute('hidden', true);
    modalHeading.innerHTML = 'Thank You';
    modalBody.innerHTML = 'One moment while we process your request...';
    setTimeout(() => {
        let presentValue = localStorage.getItem('pv');
        window.location.href = 'https://rentcalculator.com/properties' + '?widget_id=2&kind=0&sf_unit_price=260&sf_min_price=0&sf_max_price=' + presentValue + '&wplorderby=p.price_si&wplorder=DESC&wplpage=1';
        return;
    }, 3000);
}

loadStorage();

// 1.) I need to combine scripts so I can reload the page
// 2.) I need Facebook script to work
// 3.) I need pv to be placed back in the href... 
// 4.) I need to create a separate DIV to be placed at the top... So I need a script with congratulations
