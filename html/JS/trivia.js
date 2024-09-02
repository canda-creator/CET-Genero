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
    },
    {
        question: "¿Qué significan las siglas I.V.E?",
        answers: [
            { text: "Interrupcion Voluntaria del embarazo", correct: true },
            { text: "Impletación de vivienda para empleadxs", correct: false },
            { text: "Incripción a viáticos del Estado", correct: false}
        ]
    },
    {
        question: "¿Quiénes pueden acceder a información sobre métodos anticonceptivos?",
        answers: [
            {text: "Solo los mayores de 18 años", correct: false},
            {text: "Personas mayores de 16 años con consentimiento de su familia", correct: false },
            {text: "Todas las personas tienen derecho a acceder a información sobre métodos anticonceptivos, así como al cuidado de su cuerpo, el disfrute de la sexualidad y la intimidad.", correct: true}
        ]
    },
    {
        question: "Qué el consentimiento informado en el marco de la IVE",
        answers: [
            {text:"Es el acuerdo que firma la pareja para interrumpir el embarazo", correct: false},
            {text:"Es un documento a través del cual la persona gestante manifiesta haber decidido interrumpir el embarazo en forma independiente, libre de influencias y presiones de cualquier tipo.", correct: true},
            {text:"Es la autorización de un profesional de salud para poder acceder a la IVE", correct: false}
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
