var a9 = document.getElementById('a9');
var ans9 = 'reticent';
var sc9;

function get() {
    if (a9.value == ans9) {
        sc9 = 1;
    } else {
        sc9 = 0;
    }
    localStorage.setItem('score9', sc9);
}

var el = document.getElementById('nxt');
el.addEventListener('click', get, false);