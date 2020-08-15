var a4 = document.getElementById('a4');
var ans4 = 'violent';
var sc4;

function get() {
    if (a4.value == ans4) {
        sc4 = 1;
    } else {
        sc4 = 0;
    }
    localStorage.setItem('score4', sc4);
    
}

var el = document.getElementById('nxt');
el.addEventListener('click', get, false);