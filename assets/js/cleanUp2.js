//Controls
const controls = document.getElementById('controls');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
// Question and Answers
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// Final Complete button to submit Array data
const submitElement = document.getElementById('complete-btn');

// Counter Elements
const lineElement = document.getElementById('line');
const progressEl = document.getElementById('progress');
const questionNumber = document.getElementById('questionNumber');
const questionCounter = document.getElementById('questionCounter');
const progressBar = document.getElementById('progressBar');

// start Survey 
const surveyContainer = document.getElementById('surveyContainer');
const formSurveyPt1 = document.getElementById('formSurveyPt1');
// survey Start button: 
const startBtn = document.getElementById('start-btn');
const startForm = document.getElementById('start-form');

// End Questions 
const endQuestionsContainer = document.getElementById('endQuestions');
const eQ1 = document.getElementById('eQ1');
const eQ2 = document.getElementById('eQ2');
const showSchedule = document.getElementById('showSchedule');
const skipSchedule = document.getElementById('skipSchedule');
const eQ3 = document.getElementById('eQ3');

// show survey elements
const showSurvey = document.getElementById('showSurvey');
const formEl = document.getElementById('start-form');
let emailSurvey, emailSurveyChild;

// condition whether to show survey or not
let surveyCompleted = Boolean;

// set question index to 0
let currentQuestionIndex = 0;
// empty variable to hold selected answers as an object 
let selectedAnswers = {};

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


// (A) START when user clicks the complete button
// Validate Email
    if (validateEmail) {
        // add to local storage
        localStorage.setItem('email', emailEl);
        selectedAnswers = { 'email': emailEl };
        
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
                startSurvey();
        } else {
            alert('must enter a valid email address');
            return;
        }
            // hideForm();
});
            
// email validation util function
let validateEmail = (emailEl) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailEl).toLowerCase());
  }

// also add a complete facebook message so it can pass to next screen (not there yet);
// after user clicks hide elements and show hidden elements
// start survey 

let startSurvey = () => {
    startForm.classList.add('hide');
    surveyContainer.classList.remove('hide');
    questionCounter.classList.remove('hide');
    progressBar.classList.remove('hide');
    questionContainerElement.classList.remove('hide');
    controls.classList.remove('hide');

    // step 1 //
    showFirstQuestion();
}

// show first question function at index 0
let showFirstQuestion = () => {
    showQuestion(questions[currentQuestionIndex]);
    return;
}
// show question at index ==! 0
let setNextQuestion = () => {
    // STEP 2 // 
    // STEP 5 // 
    resetState();

    if (questions.length > currentQuestionIndex) {
        console.log('show next question confirmed');
        showQuestion(questions[currentQuestionIndex]);
    return;
} else {
    console.log('endSurvey() activate');
    endSurvey();
    return;
 }
}

let showQuestion = (question) => {
    // STEP 3a //
    console.log('showQuestion', question);
    questionElement.innerText = question.question;
  	questionElement.setAttribute('style', 'text-align:center;')
    
    
    question.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.innerText = answer.text;
        answerButton.classList.add('btn');
        // if (answer.text) {
        //     answerButton.dataset.text = answer.text;
        // }
        answerButton.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(answerButton);
    });
};

let resetState = () => {
    // STEP 3b/5b //
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    nextButton.classList.add('disabled');
}

let selectAnswer = (e) => {
    // STEP 4 //
    // set the question to a constant to be pushed to an object 
    const questionKey = questions[currentQuestionIndex].question;

    // define the text of the btn that was selected
    const selectedText = e.target.innerText;

    nextButton.classList.remove('disabled');
        // when next btn is clicked, push question/answer key/value to selectedAnswers object
        nextButton.addEventListener('click', () => {
            selectedAnswers = {...selectedAnswers, [questionKey] : selectedText }
            console.log('selectedAnswers', selectedAnswers);
            console.log('currentQuestionIndex before', currentQuestionIndex);
    
            // then increase the width of the progress bar
            switch (currentQuestionIndex) {
                case 0:
                    console.log('Q1');
                    progressEl.style.width = '66%';
                    questionNumber.innerText = '2';
                    break;
                case 1:
                    console.log('Q2');
                    progressEl.style.width = '80%';
                    questionNumber.innerText = '3';
                    break;
                case 2: 
                    console.log('Q3');
                    progressEl.style.width='90%';
                    questionNumber.innerText='3';
                    break;
                default:
                    console.log('endQs');
                    break;
            }
            currentQuestionIndex++;
            console.log('currentQuestionIndex after', currentQuestionIndex);
            console.log('questions.length', questions.length);
            setNextQuestion();
        }, { once: true });
}

let submitData = (e) => {
    e.preventDefault();

    async function sendForm (url='', data = {}) {

        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            referrPolicy: 'strict-origin-when-cross-origin',
            body: JSON.stringify(data)
        });
            return response.json();
        }
      
    sendForm('https://hooks.zapier.com/hooks/catch/9671423/bkkreeh/', selectedAnswers)
        .then(data => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    surveyConfirmation();
};

let surveyConfirmation = () => {
    eQ3.classList.add('hide');
    const startContainer = document.getElementById('start');
    const continueBtn = document.createElement('button');
  const surveySent = document.createElement('h1');
    surveySent.textContent = 'Your Survey Has Been Sent!';
  surveySent.setAttribute('style', 'text-align: center;');
    continueBtn.innerText = 'continue';
    continueBtn.classList.add('btn');
    continueBtn.setAttribute('style', 'margin: 0 auto;');
  	startContainer.appendChild(surveySent);
    startContainer.appendChild(continueBtn);
    continueBtn.addEventListener('click', () => {
        let pv = localStorage.getItem('pv');
        window.location.href = "https://rentcalculator.com/properties/?widget_id=2&kind=0&sf_unit_price=260&sf_min_price=0&sf_max_price="+pv;
    });
};

let endSurvey = () => {
        const endNextBtn = document.getElementById('endNextBtn')
        formSurveyPt1.classList.add('hide');
        endQuestionsContainer.classList.remove('hide');
        eQ1.classList.remove('hide');

        endNextBtn.addEventListener('click', showEQ2);
        return;
}

let showEQ2 = () => {
    const showSchedule = document.getElementById('showSchedule');
    const skipSchedule = document.getElementById('skipSchedule');

    eQ1.classList.add('hide');
    eQ2.classList.remove('hide');
}

let showScheduleCalendar = () => {
    console.log('show schedule');
    return;
}

let scheduleSkipped = () => {
    console.log('schedule skipped');
    eQ2.classList.add('hide');
    eQ3.classList.remove('hide');

    /* 
    Before I forget, I need to add in the Calendly scheduler to schedule a call with a loan officer
    Now this might not be calendly needed, but it may be advantageous to incorporate all calendars - no. it's quite simple 
    I just need to put in today but i would need to check the time
    So I would need to figure out if there is a library that exists that has a scheduler... well Calendly does work
    and it checks times... so let me create a new calendar that has time blocks and that only 4 people can schedule to this time block - 

    */
    return;
}

// when survey is complete, console.log complete
// => run fuction to hide all attributes and show eQ1

const questions = [
    {
        question: 'When Does Your Current Lease End?',
        answers: [
            {
                text: 'My Lease Has Already Ended',
                correct: true,
                value: 10
            },
            {
                text: 'This Month',
                correct: true,
                value: 5
            },
            {
                text: 'Next Month',
                correct: true,
                value: 4
            },
            {
                text: '3-6 Months',
                correct: true,
                value: 3
            },
            {
                text: 'More Than 6-months',
                correct: true,
                value: 1
            }
        ]
    },
    {
        question: 'What Would You Estimate Your Credit Score To Be?',
        answers: [
            {
                text: 'Greater Than 720',
                correct: true,
                value: 10 
            },
            {
                text: 'Between 650-720',
                correct: true,
                value: 5
            },
            {
                text: 'Somewhere between 550-650',
                correct: true,
                value: 3
            },
            {
                text: 'Needs some work :/',
                correct: true,
                value: 2
            },
            {
                text: 'I have no idea',
                correct: true,
                value: 0
            }
        ]
    },
    {
        question: 'How Much Would You Be Willing To Put Down As A Down Payment Towards A New Home?',
        answers: [
            {
                text: '0%',
                correct: true,
                value: 1
            },
            {
                text: '3%',
                correct: true,
                value: 3
            },
            {
                text: '5%',
                correct: true,
                value: 5
            },
            {
                text: '10%',
                correct: true,
                value: 10
            },
            {
                text: '20%',
                correct: true,
                value: 20
            }
        ]
    }
]

backButton.addEventListener('click', () => {
    let back = (currentQuestionIndex - 1)

    if (currentQuestionIndex !== 0 ) {
    console.log(back);
    resetState();
    showQuestion(questions[back]);
    } else {
        console.log('cannot go back');
        return;
    }
} );


showSchedule.addEventListener('click', showScheduleCalendar);
skipSchedule.addEventListener('click', scheduleSkipped);
submitElement.addEventListener('click', submitData);

  // wait for all data to load set timeout for 5 seconds
  setTimeout(() => {console.log('Data Has Loaded')}, 5000);
  //then load local storage
  loadStorage();