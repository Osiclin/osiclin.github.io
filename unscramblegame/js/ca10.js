var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10;
a1 = document.getElementById('a1');
a2 = document.getElementById('a2');
a3 = document.getElementById('a3');
a4 = document.getElementById('a4');
a5 = document.getElementById('a5');
a6 = document.getElementById('a6');
a7 = document.getElementById('a7');
a8 = document.getElementById('a8');
a9 = document.getElementById('a9');
a10 = document.getElementById('a10');

var ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10;
ans1 = 'stew';
ans2 = 'cord';
ans3 = 'captain';
ans4 = 'violent';
ans5 = 'umbrella';
ans6 = 'juvenile';
ans7 = 'excruciate';
ans8 = 'decorum';
ans9 = 'reticent';
ans10 = 'skirmish';

var sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, s10;

function get() {
    if (a10.value == ans10) {
        sc10 = 1;
    } else {
        sc10 = 0;
    }
    localStorage.setItem('score10', sc10);
}

var el = document.getElementById('nxt');
el.addEventListener('click', get, false);