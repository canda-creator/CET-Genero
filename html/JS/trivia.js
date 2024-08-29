const questions = [
    {
        question: "¿Cuándo comenzó a ser legal el Aborto en Argentina?",
        answers: [
            { text: "2020", correct: true },
            { text: "2019", correct: false },
            { text: "2021", correct: false }
        ]
    },
    {
        question: "¿Tengo que pagar para poder abortar?",
        answers: [
            { text: "SÍ", correct: false },
            { text: "NO", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer');
        button.addEventListener('click', () => selectAnswer(answer));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    Array.from(answersContainer.children).forEach(button => {
        button.disabled = true;
        if (button.textContent === answer.text) {
            button.style.backgroundColor = answer.correct ? 'green' : 'red';
        }
    });
    nextButton.classList.remove('hidden');
}

function showResult() {
    resultText.textContent = `Obtuviste ${score} de ${questions.length} preguntas correctas.`;
    resultContainer.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.classList.add('hidden');
    } else {
        showResult();
    }
}

function restartQuiz() {
    startQuiz();
}

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

startQuiz();
