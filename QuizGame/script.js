const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScree = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestions = [

    {
        question:"What is the capital of France?",
        answer:[
            {text:"London", correct:false},
            {text:"Berlin", correct:false},
            {text:"Paris", correct:true},
            {text:"Madrid", correct:false},

        ]
    },

    
    {
        question:"Which planet is known as the red planet?",
        answer:[
            {text:"Veneus", correct:false},
            {text:"Mars", correct:true},
            {text:"Jupiter", correct:false},
            {text:"Saturn", correct:false},

        ]
    },

    {
        question:"What is the largest ocean on earth?",
        answer:[
            {text:"Atlantic Ocean", correct:false},
            {text:"Indian Ocean", correct:false},
            {text:"Pacific Ocean", correct:true},
            {text:"Arctic", correct:false},

        ]
    },

    {
        question:"What of these is NOT a programming language?",
        answer:[
            {text:"Java", correct:false},
            {text:"React", correct:false},
            {text:"JavaScript", correct:true},
            {text:"Python", correct:false},

        ]
    },

    {
        question:"hat is the chemical symbol for gold?",
        answer:[
            {text:"Go", correct:false},
            {text:"Gd", correct:false},
            {text:"Au", correct:true},
            {text:"Ag", correct:false},

        ]
    },



]