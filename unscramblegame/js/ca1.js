function get() {
    var a1 = document.getElementById('a1');
    var ans1 = 'stew';
    var sc1;

    if (a1.value == ans1) {
        sc1 = 1;
    } else {
        sc1 = 0;
    }
    localStorage.setItem('score1', sc1);
}

var el = document.getElementById('nxt');
el.addEventListener('click', get, false);