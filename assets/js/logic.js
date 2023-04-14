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
    {
        question: "Arrays in Javascript can be used to store ____.",
        options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "Terminal / Bash", "For loops", "Console log"],
        answer: "Console log"
    },
];

var timeLeft = 75;
var questionNumber = 0;
var quizEnd = 0;

start.addEventListener('click', function() {
    timer.textContent = 'Time: '+ timeLeft;
    if (timeLeft === 75) {
        var timeCheck = setInterval(function () {
            timeleft = timeLeft--;
            timer.textContent = 'Time: '+ timeLeft;
    
            if (timeLeft <= 0 || quizEnd === 1) {
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
        timeLeft = timeLeft - 10;
    }
    questionNumber++;
    
    if (questionNumber >= quizContent.length) {
        complete();
    } else {
    startQuiz();
    };
};

function complete() {
    var score = timeLeft;
    quizEnd++;
    timer.textContent = 'Finished!';
    main.innerHTML = "";
    main.textContent = "All Done!";
    var finalScore = document.createElement('p');
    main.append(finalScore);
    finalScore.textContent = "Congrats! Your final score is " + score;

    var submitDiv = document.createElement('div');
    submitDiv.setAttribute('id','subDiv');
    main.append(submitDiv);
    var initialLabel = document.createElement('label');
    initialLabel.setAttribute('for','initInput');
    initialLabel.textContent = "Enter your initials: "
    submitDiv.append(initialLabel);
    var initialInput = document.createElement('input');
    initialInput.setAttribute('name', 'initInput');
    submitDiv.append(initialInput);
    var submitButton = document.createElement('button');
    submitButton.setAttribute('type','submit');
    submitButton.textContent = "Submit";
    submitDiv.append(submitButton);

    submitButton.addEventListener('click', function() {
        var initials = initialInput.value;
        var saveScore = {
            saveInitials: initials,
            saveScore: score,
        };

        var checkScores = JSON.parse(localStorage.getItem('user'));
        if (checkScores === null) {
            localStorage.setItem('user', JSON.stringify(saveScore));
        } else {
        }


        window.location.replace("./highscores.html");
    });
};