// questiojns
const questions = [
    {
        question: "which is the correct order of the word?",
        answers: [
            {text: 'CAJLOE', correct: false},
            {text: 'CAJOLE', correct: true},  //to urge
            {text: 'JOLECA', correct: false},
            {text: 'LOJECA', correct: false}
        ]
    },
    {
        
        question: "which is the correct order of the word?",
        answers: [
            {text: 'FLABBERGASTED', correct: true}, //astounded
            {text: 'BEFLABEGASTED', correct: false},
            {text: 'GASTEDFLABBER', correct: false},
            {text: 'STEDFLABBERGA', correct: false}
        ]
    },
    {
        
        question: "which is the correct order of the word?",
        answers: [
            {text: 'CATEFUBOS', correct: false},
            {text: 'OBFUSCATE', correct: true},//To deliberately make something unclear or confusing; to obscure or bewilder.  
            {text: 'FUSCATOBE', correct: false},
            {text: 'CATOBEFUS', correct: false}
        ]
    },
    {
        
        question: "which is the correct order of the word?",
        answers: [
            {text: 'TINBIDUABLE', correct: false},
            {text: 'TABLEINBIDU', correct: false},  
            {text: 'BITABLEINDU', correct: false},
            {text: 'INDUBITABLE', correct: true}  //Beyond doubt or question; unquestionable or indisputable.
        ]
    },
]



// functionality of the quiz section
const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('anwser-buttons');
const nextBtn = document.getElementById('next-btn');
const closeBtn = document.getElementById('close-btn');
const app  = document.getElementById('app');
const playGame = document.getElementById('playGame');

let currentQuestionIndex = 0;
let score = 0;


playGame.addEventListener('click', () =>{
    app.style.display = 'block';
    playGame.style.display = 'none';
})
function startQuiz(){
    currentQuestionIndex = 0;
    nextBtn.innerHTML = "NEXT"
    showQuestion();
}

function showQuestion(){
    resetstate()
    let currentQuestion = questions[currentQuestionIndex];
    let quesitionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = quesitionNo + '. ' + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('answer-btn');
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}
function resetstate(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){    
    resetstate();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    closeBtn.style.display = 'block';
    closeBtn.addEventListener('click', ()=> {
        window.location.reload();
        app.style.display = 'none';
        playGame.style.display = 'block';
    })
}


function handleNextButton(){
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        nextBtn.onclick = window.location.reload;
    }
})

startQuiz();

