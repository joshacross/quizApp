const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const lineElement = document.getElementById('line');

let x, currentQuestionIndex;

let selectedAnswers = [];

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

backButton.addEventListener('click', () => {
    showQuestion(x[currentQuestionIndex - 1])
})

async function startGame () {
    console.log('start game');
    x = questions;
    currentQuestionIndex = 0;
    setNextQuestion();
    // await questions;
    // currentQuestionIndex = 0;
    // setNextQuestion();
}

function setNextQuestion () {
    // STEP 2 // 
    // STEP 5 // 
    resetState();
    showQuestion(x[currentQuestionIndex]);
    }

function showQuestion(question) {
    console.log(question);
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
        location.href = './rentcalc.html';
    }
}

const questions = [
    {
        question: 'Did you know you could save $10,000+ in your first year owning a home versus renting? ... $100,000s over 5-10 years??',
        answers: [
            {
                text: 'Duhh... Of Course',
                correct: true,
                value: 10
            },
            {
                text: 'Yeah right...',
                correct: true,
                value: 5
            }

        ]
    },
    {
        question: 'Did you know you could buy a home with as low as a 550 credit score?',
        answers: [
            {
                text: 'Yes, I totally knew that',
                correct: true,
                value: 10 
            },
            {
                text: 'Oh Wow, I did not know that',
                correct: true,
                value: 5
            }
        ]
    },
    {
        question: 'Did you know you could buy a home with $0 money down?',
        answers: [
            {
                text: 'Wait what?',
                correct: true,
                value: 10
            },
            {
                text: 'Well... that does not pertain to me',
                correct: true,
                value: 15
            }
        ]
    }
]

startGame();