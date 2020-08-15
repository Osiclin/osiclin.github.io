var pname = document.getElementById('result');
pname.textContent = localStorage.getItem('pn');

var sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, sc10;
sc1 = parseInt(localStorage.getItem('score1'));
sc2 = parseInt(localStorage.getItem('score2'));
sc3 = parseInt(localStorage.getItem('score3'));
sc4 = parseInt(localStorage.getItem('score4'));
sc5 = parseInt(localStorage.getItem('score5'));
sc6 = parseInt(localStorage.getItem('score6'));
sc7 = parseInt(localStorage.getItem('score7'));
sc8 = parseInt(localStorage.getItem('score8'));
sc9 = parseInt(localStorage.getItem('score9'));
sc10 = parseInt(localStorage.getItem('score10'));

var score = sc1 + sc2 + sc3 + sc4 + sc5 + sc6 + sc7 + sc8 + sc9 + sc10;

if (score == 10) {
    document.getElementById('greet').innerHTML = 'EXCELLENT JOB <span style="font-size: 30px;">&#128562 </span>';
} else if (score < 10 && score > 6) {
    document.getElementById('greet').innerHTML = 'GOOD JOB <span style="font-size: 30px;">&#128578 </span>';
} else if (score < 7 && score > 4) {
    document.getElementById('greet').innerHTML = 'SOLID EFFORT <span style="font-size: 30px;">&#129488 </span>';
} else {
    document.getElementById('greet').innerHTML = 'POOR EFFORT <span style="font-size: 30px;">&#128580 </span>';
}

var calc = document.getElementById('score');
calc.textContent = score;



localStorage.removeItem('score1');
localStorage.removeItem('score2');
localStorage.removeItem('score3');
localStorage.removeItem('score4');
localStorage.removeItem('score5');
localStorage.removeItem('score6');
localStorage.removeItem('score7');
localStorage.removeItem('score8');
localStorage.removeItem('score9');
localStorage.removeItem('score10');
localStorage.removeItem('pn');