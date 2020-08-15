var i = 0;
var txt = 'Unscramble Words';
var speed = 200;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById('logo').textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()