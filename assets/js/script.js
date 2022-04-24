
//Controls
const controls = document.getElementById('controls');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
// Question and Answers
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// Final Complete button to submit Array data
const submitElement = document.getElementById('submit-btn');

// Counter Elements
const lineElement = document.getElementById('line');
const progressEl = document.getElementById('progress');
const questionNumber = document.getElementById('questionNumber');
const questionCounter = document.getElementById('questionCounter');
const progressBar = document.getElementById('progressBar');

// start Survey 
const startBtn = document.getElementById('start-btn');
const startForm = document.getElementById('start-form');

// End Questions 
const eQ1 = document.getElementById('eQ1');
const eQ2 = document.getElementById('eQ2');
const eQ3 = document.getElementById('eQ3');

// empty variable to hold 
let currentQuestionIndex = 0;

let selectedAnswers = {};

let validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
// email.addEventListener('focus', validateEmail(email));
//declare variables
// add event listener
startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    validateEmail(email);
    if (validateEmail) {
        localStorage.setItem('email', email);
        selectedAnswers = { 'email': email };
        startSurvey() 
    } else {
        alert('must enter a valid email address');
        return;
    };
})


// also add a complete facebook message so it can pass to next screen (not there yet);
// after user clicks hide elements and show hidden elements
// start survey 

function startSurvey () {
    startForm.classList.add('hide');
    questionCounter.classList.remove('hide');
    progressBar.classList.remove('hide');
    questionContainerElement.classList.remove('hide');
    controls.classList.remove('hide');

    // step 1 //
    setNextQuestion();
}

function setNextQuestion () {
    // STEP 2 // 
    // STEP 5 // 
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    }

function showQuestion(question) {
    // STEP 3a //
    console.log(question);
    questionElement.innerText = question.question;
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
}

function resetState() {
    // STEP 3b/5b //
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    nextButton.classList.add('opacity');
}

function selectAnswer (e) {
    // STEP 4 //
    const selectedButton = e.target;
    const selectedText = selectedButton.dataset.text;

    if (selectedText === selectedText) {
        nextButton.classList.remove('opacity');
        // if next is selected then add opacity and push selected text
        nextButton.addEventListener('click', () => {

            const questionKey = questions[currentQuestionIndex].question;

            // conditional logic if the selectedAnswer is updated...which... I can go back anyway
            // for (let name in selectedAnswers) {
            //     if (selectedAnswers.hasOwnProperty(name)) {

            //     } 
            // }
            // if selectedAnswers.hasOwnProperty(keyValue) {

            selectedAnswers = {...selectedAnswers, [questionKey] : selectedText }
            console.log(currentQuestionIndex);
            switch (currentQuestionIndex) {
                case 1:
                    console.log('Q2');
                    progressEl.style.width = '66%';
                    questionNumber.innerText = '2';
                    break;
                case 2:
                    console.log('Q3');
                    progressEl.style.width = '80%';
                    questionNumber.innerText = '3';

                    break;
                default:
                    console.log(0);
                    break;
            }
                currentQuestionIndex++;
                console.log('Index [' + currentQuestionIndex + ']');
                resetState();
                setNextQuestion();
            })
    } else {
        return;
    }

    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.classList.add('hide');
        backButton.classList.add('hide');
        questionContainerElement.classList.add('hide');
        progressEl.style.width = '100%';
        eQ1.classList.remove('hide');
        
        submitElement.classList.remove('hide');
        // have to change this... 
    };
};

    backButton.addEventListener('click', () => {
        let back = (currentQuestionIndex - 1)
        console.log(back);
        resetState();
        showQuestion(questions[back]);
    } );
   
function submitData(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();

    selectedAnswers = {...selectedAnswers, email }

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
      
    sendForm('https://hooks.zapier.com/hooks/catch/9671423/b8up9vj/', selectedAnswers)
        .then(data => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    surveyConfirmation();
};

let surveyConfirmation = () => {
    const continueBtn = document.createElement('button');
    getStarted.textContent = 'Your Survey Has Been Sent!';
    continueBtn.innerText = 'continue';
    continueBtn.classList.add('btn');
    const controlsElement = document.getElementById('controls');
    controlsElement.setAttribute('style', 'justify-content: center !important');
    controlsElement.appendChild(continueBtn);
    continueBtn.addEventListener('click', () => {
        window.parent.location.href = 'https://rentcalculator.com/thank-you-confirmation/';
    });
};

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
                text: '$0',
                correct: true,
                value: 1
            },
            {
                text: '$7,500',
                correct: true,
                value: 3
            },
            {
                text: '$12,500',
                correct: true,
                value: 5
            },
            {
                text: '$25,000',
                correct: true,
                value: 10
            },
            {
                text: 'Over $25,000',
                correct: true,
                value: 20
            }
        ]
    },
    {
        question: 'How Much Would You Be Willing To Put Down As A Down Payment Towards A New Home?',
        answers: [
            {
                text: '$0',
                correct: true,
                value: 1
            },
            {
                text: '$7,500',
                correct: true,
                value: 3
            },
            {
                text: '$12,500',
                correct: true,
                value: 5
            },
            {
                text: '$25,000',
                correct: true,
                value: 10
            },
            {
                text: 'Over $25,000',
                correct: true,
                value: 20
            }
        ]
    }
]

let endSurvey = () => {
    // hide anwers and questions 
    // show last questions
    // create but

}

// startSurvey();

submitElement.addEventListener('click', submitData);



