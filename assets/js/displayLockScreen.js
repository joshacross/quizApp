//declare variables 
const showSurvey = document.getElementById('showSurvey');
const viewDetail = document.querySelector('[id*="prp_link"]');

const startBtn = document.getElementById('start-btn');
console.log(startBtn);

let surveyCompleted = Boolean;

let loadStorage = () => {
    surveyCompleted = localStorage.getItem('survey');

    if (surveyCompleted) {
        console.log('surveySeen');
            showSurvey.setAttribute('hidden', true);
        return;
    } else {
        console.log('showSurvey');
        return;
    }
};

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailEl = document.getElementById('email');
    console.log(emailEl);
    // if (validateEmail) {
    //     localStorage.setItem('email', emailEl);
    //     // submit data to update DB? 
    //     async function sendForm (url='', data = {}) {

    //         const response = await fetch(url, {
    //             method: 'POST',
    //             mode: 'cors',
    //             cache: 'no-cache',
    //             credentials: 'omit',
    //             referrPolicy: 'strict-origin-when-cross-origin',
    //             body: JSON.stringify(data)
    //         });
    //             return response.json();
    //         }
          
    //     sendForm('https://hooks.zapier.com/hooks/catch/9671423/b8up9vj/', emailEl)
    //         .then(data => {
    //             console.log(data);
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    //     hideForm();
    // } else {
    //     alert('must enter a valid email address');
    //     return;
    // };
});

let validateEmail = (emailEl) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailEl).toLowerCase());
  }

  let hideForm = () => {
    surveyCompleted = true;
    localStorage.setItem('survey', true);
    showSurvey.setAttribute('hidden', true);
    return;
}

loadStorage();