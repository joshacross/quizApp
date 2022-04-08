//declare variables 
const showSurvey = document.getElementById('showSurvey');
const formEl = document.getElementById('formId');
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
            showSurvey.setAttribute('hidden', true);
            emailSurvey.setAttribute('hidden', true);
            console.log('emailSurveyChild:after', emailSurveyChild);
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
loadStorage();