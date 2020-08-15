var a5 = document.getElementById('a5');
var ans5 = 'umbrella';
var sc5;

function get() {
    if (a5.value == ans5) {
        sc5 = 1;
    } else {
        sc5 = 0;
    }
    localStorage.setItem('score5', sc5);
}

var el = document.getElementById('nxt');
el.addEventListener('click', get, false);