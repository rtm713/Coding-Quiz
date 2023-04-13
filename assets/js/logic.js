var start = document.querySelector('#start');
var timer = document.querySelector('#timer');
var intro = document.querySelector('#intro');
var headBox = document.querySelector('#headBox');
var optionsList = document.querySelector('#options');
var feedback = document.querySelector('#feedback');
var main = document.querySelector('main');

var quizContent = [
    { 
        question: "Commonly used data types DO NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        options: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses"
    },
];

var timeLeft = 75;
var questionNumber = 0;

start.addEventListener('click', function() {
    timer.textContent = 'Time: '+ timeLeft;
    if (timeLeft === 75) {
        var timeCheck = setInterval(function () {
            timeleft = timeLeft--;
            timer.textContent = 'Time: '+ timeLeft;
    
            if (timeLeft <= 0) {
                clearInterval(timeCheck);
                complete();
            }
        },1000);
    }
    startQuiz();
});

function startQuiz() {
    main.innerHTML = "";
    var newUL = document.createElement("ul");
    
    var curChoices = quizContent[questionNumber].options;
    main.textContent = quizContent[questionNumber].question;

    curChoices.forEach(function(curitem) {
        var list = document.createElement('li');
        list.textContent = curitem;
        main.append(newUL);
        newUL.append(list);
        list.addEventListener('click', (checkAnswer));
    });
};

function checkAnswer(choice) {
    var chosen = choice.target;
    if (chosen.textContent == quizContent[questionNumber].answer) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Wrong!";
    }
    questionNumber++;
    
    if (questionNumber >= quizContent.length) {
        complete();
    } else {
    startQuiz();
    };
};

function complete() {
    timeLeft = 0;
    timer.textContent = 'Finished!';
    main.innerHTML = "";
    feedback.textContent = "";
};