var a3 = document.getElementById('a3');
var ans3 = 'captain';
var sc3;

function get() {
    if (a3.value == ans3) {
        sc3 = 1;
    } else {
        sc3 = 0;
    }
    localStorage.setItem('score3', sc3);
}

var el = document.getElementById('nxt');
el.addEventListener('click', get, false);