var start = document.querySelector('#start');
var timer = document.querySelector('#timer');
var intro = document.querySelector('#intro');
var headBox = document.querySelector('#headBox');
var optionsList = document.querySelector('#options');

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
    for (var i=0; i <= quizContent.length; i++) {
        headBox.textContent = quizContent[i].question;
        for (var i2 = 0; i2 < quizContent[i].options.length; i2++) {
            var list = document.createElement('li');
            list.textContent = quizContent[i].options[i2];
            optionsList.append(list);
        }
        list.addEventListener('click', function() {
            var chosen = list.value;
            if (chosen === quizContent[i].answer) {
                alert("this worked!");
            }
        });
    };
    complete();
}

function checkAnswer() {
    optionsList.innerHTML = "";
}

function complete() {
    timer.textContent = 'Finished!';
}