var a2 = document.getElementById('a2');
var ans2 = 'cord';
var sc2;

function get() {
    if (a2.value == ans2) {
        sc2 = 1;
    } else {
        sc2 = 0;
    }
    localStorage.setItem('score2', sc2);
}
console.log(localStorage)
var el = document.getElementById('nxt');
el.addEventListener('click', get, false);