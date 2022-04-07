//declare variables 
const showSurvey = document.getElementById('showSurvey');
const formEl = document.getElementById('formId');
// const emailSurvey = document.getElementById('emailSurvey');
// const modalPrevention = emailSurvey.firstChild;
// console.log(emailSurvey);
// console.log(modalPrevention);

let surveyCompleted = Boolean;

let loadStorage = () => {
    surveyCompleted = localStorage.getItem('survey');

    if (surveyCompleted) {
        console.log('surveySeen');
            showSurvey.setAttribute('hidden', true);
            const emailSurvey = document.getElementById('emailSurvey');
            console.log(emailSurvey);
            modalPrevention.setAttribute('data-trigger-element-class', 'surveySeen');
        return;
    } else {
        console.log('showSurvey');
        return;
    }
};

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailEl = document.getElementById('email').value;
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
            window.location.href = 'https://rentcalculator.com/properties';
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

  let hideForm = () => {
    // const emailSurvey = document.getElementById('emailSurvey');
    // const modalPrevention = emailSurvey.firstChild;
    surveyCompleted = true;
    localStorage.setItem('survey', true);
    showSurvey.setAttribute('hidden', true);
    // emailSurvey.setAttribute('hidden', true);
    // modalPrevention.setAttribute('data-trigger-element-class', 'surveySeen');
    return;
}

loadStorage();