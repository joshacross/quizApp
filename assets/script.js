const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const questionContainerElement = document.getElementById('question-container');
const questionContainerTitleElement = document.getElementById('question-container-title');
const questionContainerDescriptionElement = document.getElementById('question-container-description');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const formElement = document.getElementById('form');
const submitElement = document.getElementById('submit-btn')

let x, currentQuestionIndex

let selectedAnswers = [];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame () {
    // step 1 //
    console.log('start game');
    startButton.classList.add('hide');
    x = questions
    currentQuestionIndex = 0;
    questionContainerTitleElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    questionContainerDescriptionElement.classList.add('hide');
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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    // STEP 3b/5b //
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    // STEP 4 //
    console.log(e);
    const selectedButton = e.target;
    const selectedText = selectedButton.dataset.text;
    
    selectedAnswers.push(selectedText);

    // console.log(selectedAnswers[selectedText]);

    for (let i = 0; i < selectedAnswers.length; i++) {
        console.log(selectedAnswers[i]);
    }



    console.log(selectedAnswers);
    
    if (x.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.classList.add('hide');
        submitElement.classList.remove('hide');
        questionContainerElement.classList.add('hide');
        formElement.classList.remove('hide');
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
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