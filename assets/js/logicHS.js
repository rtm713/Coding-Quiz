
var backButton = document.querySelector('#back');
var clearButton = document.querySelector('#clear');
var scoresUL = document.querySelector('#scores');


var checkScores = JSON.parse(localStorage.getItem("checkScores"));


if (checkScores != null) {

    for (var i = 0; i < checkScores.length; i++) {

        var scoreLI = document.createElement("li");
        scoreLI.textContent = checkScores[i].saveInitials + "  " + checkScores[i].saveScore;
        scoresUL.appendChild(scoreLI);

    }
};



// backButton.addEventListener('click', function() {
//     window.location.replace('../../index.html');
// });

clearButton.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});