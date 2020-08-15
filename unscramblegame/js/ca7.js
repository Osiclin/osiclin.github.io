var a7 = document.getElementById('a7');
var ans7 = 'excruciate';
var sc7;

function get() {
    if (a7.value == ans7) {
        sc7 = 1;
    } else {
        sc7 = 0;
    }
    localStorage.setItem('score7', sc7);
}

var el = document.getElementById('nxt');
el.addEventListener('click', get, false);