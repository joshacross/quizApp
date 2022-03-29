const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const questionContainerElement = document.getElementById('question-container');
const questionContainerTitleElement = document.getElementById('question-container-title');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const formElement = document.getElementById('form');
const submitElement = document.getElementById('submit-btn')
const lineElement = document.getElementById('line');
const progressEl = document.getElementById('progress');
const questionNumber = document.getElementById('questionNumber');
const getStarted = document.getElementById('getStarted');
const showQuiz = document.getElementById('showQuiz');
const pv = document.getElementById('congratulations-title');

let x, currentQuestionIndex;

let selectedAnswers = {'presentValue': pv};

// for each answer place key, value inside object... which is not append
// let timeline = '';
// let estCredScore = '';
// let downPayment = '';

function startSurvey () {
    // step 1 //
    x = questions
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion () {
    // STEP 2 // 
    // STEP 5 // 
    resetState();
    showQuestion(x[currentQuestionIndex]);
    }

function showQuestion(question) {
    // STEP 3a //
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.text) {
            button.dataset.text = answer.text;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
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
    } else {
        return;
    }
   
    // if next is selected then add opacity and push selected text
    nextButton.addEventListener('click', () => {
        let questionKey = questions(currentQuestionIndex);
        let answerValue = selectedText;
        let x = questionKey;
        let y = answerValue;
        let keyValue = {x,y};

        // conditional logic if the selectedAnswer is updated...which... I can go back anyway
        // for (let name in selectedAnswers) {
        //     if (selectedAnswers.hasOwnProperty(name)) {

        //     } 
        // }
        // if selectedAnswers.hasOwnProperty(keyValue) {

        selectedAnswers = {...selectedAnswers, keyValue };
        console.log(selectedAnswers);

        // selectedAnswers.push(selectedText);
        // for (let i = 0; i < selectedAnswers.length; i++) {
        //     console.log(selectedAnswers[i]);
        //     console.log('this');
        // }
        switch (currentQuestionIndex) {
            case 0:
                console.log(0);
                progressEl.style.width = '66%';
                questionNumber.innerText = '2';
                break;
            case 2:
                console.log(2);
                progressEl.style.width = '80%';
                questionNumber.innerText = '3';

                break;
            default:
                console.log(1);
                break;
        }
        console.log(selectedAnswers);
            currentQuestionIndex++;
            console.log(currentQuestionIndex);
            setNextQuestion();
        });

    backButton.addEventListener('click', () => {
        let back = (currentQuestionIndex - 1)
        console.log(back);
        resetState();

        showQuestion(x[back]);
    } );
   
    
    if (x.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.classList.add('hide');
        backButton.classList.add('hide');
        submitElement.classList.remove('hide');
        questionContainerElement.classList.add('hide');
        formElement.classList.remove('hide');
        progressEl.style.width = '100%';
        getStarted.innerText = 'Way To Go!'
        const description = document.createElement('h3');
        description.innerText = 'Everything looks great and ready to send! Please provide your email so we may send you appointment information. For immediate assistance, reach out to our team directly at (615) 822-6220 or by email at support@rentcalculator.com.'
        getStarted.appendChild('description');
    };
};

function submitData() {


    //I currently have an array... I need to parse? the array? Split the array

    async function sendForm (url='', data = {}) {

        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            // redirect: 'follow',
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
    preventDefault();
}

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
                text: (pvFormated*0),
                correct: true,
                value: 1
            },
            {
                text: (pvFormated*.03),
                correct: true,
                value: 3
            },
            {
                text: (pvFormated*.05),
                correct: true,
                value: 5
            },
            {
                text: (pvFormated*.10),
                correct: true,
                value: 10
            },
            {
                text: (pvFormated*.20),
                correct: true,
                value: 20
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

startSurvey();

submitElement.addEventListener('click', submitData);