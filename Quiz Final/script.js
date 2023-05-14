const questions = [
    {
        question: "Qual o meu maior sonho?",
        answers: [
            { text: "Ter filhos", correct: true},
            { text: "Ir ao Nepal", correct: false},
            { text: "Comprar um bugatti", correct: false},
            { text: "Ter uma ilha", correct: false},
        ]
    },
    {
        question: "O que gosto mais em ti baby?",
        answers: [
            { text: "Judiar comigo", correct: false},
            { text: "Sorriso Lindo", correct: false},
            { text: "As tuas macaquices", correct: false},
            { text: "Tudo ehhe", correct: true},
        ]

    },
    {
        question: "O que gosto mais de fazer num dia de chuva?",
        answers: [
            { text: "Ver netflix e ficar deitado o dia inteiro", correct: false},
            { text: "Ler um livro e ouvir musica", correct: false},
            { text: "Jogar jogos ate ficar com dor de cabeça", correct: false},
            { text: "Ficar a olhar pra chuva e apreciar ", correct: true},
        ]
    },
    {
        question: "Qual o meu segundo país de eleição pra viver?",
        answers: [
            { text: "Nepal", correct: false},
            { text: "Reino Unido", correct: true},
            { text: "Coreia do Sul", correct: false},
            { text: "Alemanha", correct: false},
        ]
    },
    {
        question: "Qual a minha comida favorita alentejana?",
        answers: [
            { text: "Sopa de tomato", correct: false},
            { text: "Plumas de porco preto com batatas e migas", correct: true},
            { text: "Sopa de Cação", correct: false},
            { text: "Bifanas de Vendas Novas", correct: false},
        ]
    },
    {
        question: "Qual é o meio ideal date day?",
        answers: [
            { text: "Ir ás compras estroirar dinehiro", correct: true},
            { text: "Ficar em casa a ver series", correct: false},
            { text: "Dar um passeio pela rua até ficar com os pes em sangue", correct: false},
            { text: "Ir à praia e passar lá o dia todo", correct: false},
        ]
    },
    {
        question: "Qual o meu segundo clube favorito?",
        answers: [
            { text: "Caldas Futebol Clube", correct: true},
            { text: "Lusitano Ginásio Clube", correct: false},
            { text: "Boca Juniors", correct: false},
            { text: "Nápoles", correct: false},
        ]
    },
    {
        question: "O que poderei ter na mochila pra ti bb?",
        answers: [
            { text: "Camara", correct: true},
            { text: "Livro", correct: false},
            { text: "CDS", correct: true},
            { text: "Um caderno", correct: true},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);


    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `A tua pontuação ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Jogar De Novo";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

