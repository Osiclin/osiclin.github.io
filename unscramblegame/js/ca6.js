var a6 = document.getElementById('a6');
var ans6 = 'juvenile';
var sc6;

function get() {
    if (a6.value == ans6) {
        sc6 = 1;
    } else {
        sc6 = 0;
    }
    localStorage.setItem('score6', sc6);
}

var el = document.getElementById('nxt');
el.addEventListener('click', get, false);