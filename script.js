var buttonEl = document.querySelector("#score-btn");
var questionNumberIndex = 0;
var questionEl = document.getElementById("questions");

let quizQuestions = [
    {
        question: "Who was the world killing Titan in Avengers Infinity War?",
        choices: ["Killmonger", "Thanos", "IronMan", "Darth Vader"],
        correctAnswer: "Thanos"
        },
    
    {
        question: "What was Captain America's shield made out of?",
        choices: ["plastic", "metal", "vibranium", "steel"],
        correctAnswer: "vibranium"
        },
    {
        question: "Black Panther is the King of?",
        choices: ["Wakanda", "Japan", "America", "nowhere"],
        correctAnswer: "Wakanda"
        },
    {
        question: "Who is Tony Stark?",
        choices: ["Tony Montana", "Steve Rogers", "Thor", "Tony Stark"],
        correctAnswer: "Tony Stark"
        },
    {
        question: "What is Thanos searching the galaxy for?",
        choices: ["Jarvis", "Infinity Stones", "Nebula", "Peter Quill"],
        correctAnswer: "Infinity Stones"
        },
        
];
var finalQuestionIndex = quizQuestions.length;

function displayQuestion() {
var currentQuestion = quizQuestions[questionNumberIndex]
var renderQuestion = document.getElementById("question-choices")
var renderChoices = document.getElementById("choices")
renderQuestion.textContent = currentQuestion.question
for (let i = 0; i < currentQuestion.choices.length; i++) {
    const element = currentQuestion.choices[i];
    var choiceButton = document.createElement("button")
    choiceButton.textContent = element
    renderChoices.appendChild(choiceButton)
    
}
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("score-btn").addEventListener("click", highScores);

function startQuiz() {
    var startWrapper = document.getElementById("start-wrapper")
    startWrapper.classList.add("hide")
    questionEl.classList.remove("hide")
    displayQuestion()
}

function highScores() {
    
}

function checkAnswer() {

}