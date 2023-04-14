
var backButton = document.querySelector('#back');
var clearButton = document.querySelector('#clear');
var scoresUL = document.querySelector('#scores');


var score = JSON.parse(localStorage.getItem('user'));

    var scoreLI = document.createElement('li');
    scoreLI.textContent = score.saveInitials + "  " + score.saveScore;
    scoresUL.append(scoreLI);



backButton.addEventListener('click', function() {
    window.location.replace('/index.html');
});

clearButton.addEventListener('click', function() {
    localStorage.clear();
    location.reload;
});