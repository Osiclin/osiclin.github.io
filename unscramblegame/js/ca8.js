var a8 = document.getElementById('a8');
var ans8 = 'decorum';
var sc8;

function get() {
    if (a8.value == ans8) {
        sc8 = 1;
    } else {
        sc8 = 0;
    }
    localStorage.setItem('score8', sc8);
}

var el = document.getElementById('nxt');
el.addEventListener('click', get, false);