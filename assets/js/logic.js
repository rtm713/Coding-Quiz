var start = document.querySelector('#start');
var timer = document.querySelector('#timer');
var intro = document.querySelector('#intro');
var headBox = document.querySelector('#headBox');
var optionsList = document.querySelector('#options');
var feedback = document.querySelector('#feedback')

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
    intro.innerHTML = "";
    for (var i=0; i < quizContent.length; i++) {
        var curChoices = quizContent[questionNumber].options;
        headBox.textContent = quizContent[questionNumber].question;

    curChoices.forEach(function(curitem) {
        var list = document.createElement('li');
        list.textContent = curitem;
        optionsList.append(list);
        list.addEventListener('click', (checkAnswer));
    })
    };

    complete();
}

function checkAnswer(choice) {
    var chosen = choice.target;
    if (chosen.textContent == quizContent[questionNumber].answer) {
        feedback.textContent = "Correct!";
        main.innerHTML = "";
    } else {
        feedback.textContent = "Wrong!";
        intro.innerHTML = "";
    }
    questionNumber++;

    if (questionNumber >= quizContent.length) {
        complete;
    } else {
        startQuiz();
    }
}

function complete() {
    timer.textContent = 'Finished!';
}