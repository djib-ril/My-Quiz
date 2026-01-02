const storedUsername = localStorage.getItem("quizUsername") || "User";

const countdownOverlay = document.getElementById("countdownOverlay");
const countdownEl = document.getElementById("countdown");

const questions = [
    {
        question: "What is always the first code line of HTML?",
        answers: [
            { text: "A. Head", correct: false },
            { text: "B. !DOCTYPE html", correct: true },
            { text: "C. html", correct: false },
            { text: "D. body", correct: false }
        ]
    },
    {
        question: "Write CSS in full words",
        answers: [
            { text: "A. Cascading Style Service", correct: false },
            { text: "B. Cascading Style Sheet", correct: true },
            { text: "C. Customer Serial Source", correct: false },
            { text: "D. None", correct: false }
        ]
    },
    {
        question: "Which programming language helps in interactivity?",
        answers: [
            { text: "A. Java", correct: false },
            { text: "B. JavaScript", correct: true },
            { text: "C. SQL", correct: false },
            { text: "D. Preprocessor", correct: false }
        ]
    },
    {
        question: "How many headings do we have in HTML?",
        answers: [
            { text: "A. One", correct: false },
            { text: "B. Two", correct: false },
            { text: "C. Three", correct: false },
            { text: "D. None", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${storedUsername}, you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showCountdownThenScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

const overlay = document.getElementById("overlay");

setTimeout(function Remove() {
    overlay.style.display = "none";
}, 2000);

function showCountdownThenScore() {
    document.getElementById("body").style.backgroundColor = "black";

    let count = 5;

    document.querySelector(".starting").style.display = "none";

    countdownOverlay.style.display = "flex";
    countdownEl.textContent = count;

    const timer = setInterval(() => {
        count--;
        countdownEl.textContent = count;

        if (count === 0) {
            clearInterval(timer);

            countdownOverlay.style.display = "none";
            document.querySelector(".starting").style.display = "flex";
            showScore();
        }
    }, 1000);
}

// ===== FORM PAGE LOGIC =====
document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    if (userForm) {
        userForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const usernameInput = document.getElementById("username");
            const username = usernameInput.value.trim();

            if (!username) {
                alert("Please enter a username");
                return;
            }

            localStorage.setItem("quizUsername", username);
            window.location.href = "index.html";
        });
    }
});


const spent = document.getElementById("spent");
let timeleft = 65;
setInterval(function time(){
    if(timeleft <= 0){
    clearInterval(timeleft)
    spent.innerHTML = "Time Over! Finish Up"
    back.style.backgroundColor = "black";
    spent.style.color = "white"
    }
    else if(timeleft <= 65){
        spent.innerHTML = timeleft + " Seconds remaining"
    }
    timeleft --;
},1000);

const notDisplayed = document.getElementById("overlay-not-displayed");
setTimeout(function remove(){
    notDisplayed.style.display = "none";
},6000);