$('.mbutton').on('click', function() {
    $('#rworks').slideDown()
})


$('#hb').on('click', function() {
    $('#myLinks').slideToggle(600);
})


var mylinks = document.getElementById('myLinks');
function closeNav() {
    if ( mylinks.style.display == 'block' ) {
        $('#myLinks').slideUp(600);
    }
}

$('main').on('click', closeNav);


var sarrow = document.getElementById('sarrow');
var marrow = document.getElementById('marrow');
var larrow = document.getElementById('larrow');


sarrow.style.visibility = 'hidden';
marrow.style.visibility = 'hidden';
larrow.style.visibility = 'hidden';
function animateArrow() {
    setTimeout(function() {sarrow.style.visibility = 'visible'}, 1500);
    setTimeout(function() {marrow.style.visibility = 'visible'}, 2000);
    setTimeout(function() {larrow.style.visibility = 'visible'}, 2500);
    // hides arrows after display
    setTimeout(function() {sarrow.style.visibility = 'hidden'}, 5000);
    setTimeout(function() {marrow.style.visibility = 'hidden'}, 5000);
    setTimeout(function() {larrow.style.visibility = 'hidden'}, 5000);
    setTimeout(function() {animateArrow()}, 5000);
}

animateArrow();


var furnix = document.getElementsByClassName('furnix');
var furnix1 = document.getElementsByClassName('project-block');
var rwhr = document.getElementById('rwhr');
var srhr = document.getElementById('srhr');
var rworks = document.getElementById('rworks');
var projectinfo = document.getElementsByClassName('projectinfo');



var rwhrposition = rwhr.offsetTop;
var srhrposition = srhr.offsetTop;
var furnix1position = furnix1[0].offsetTop;
var furnix2position = furnix1[1].offsetTop;
var furnix3position = furnix1[2].offsetTop;
var furnix4position = furnix1[3].offsetTop;


for (i = 0; i < furnix.length; i++){
    furnix[i].style.visibility = 'hidden';
}

for (i = 0; i < furnix.length; i++){
    projectinfo[i].style.visibility = 'hidden';
}

rwhr.style.visibility = 'hidden';
srhr.style.visibility = 'hidden';



// mobile effect
if ( window.outerWidth <= 480 ) {
window.addEventListener('scroll', () => {
    if ( window.pageYOffset + 500 >= rwhrposition ){
        rwhr.classList.add('slideright');
        rwhr.style.visibility = 'visible';  
    }
    if ( window.pageYOffset + 500 >= srhrposition ){
        srhr.classList.add('slideright');
        srhr.style.visibility = 'visible';
    }
    if ( window.pageYOffset + 520 >= furnix1position ) {
        furnix1[0].classList.add('slideup');
        furnix[0].style.visibility = 'visible';
        projectinfo[0].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 520 >= furnix2position ) {
        furnix1[1].classList.add('slideup');
        furnix[1].style.visibility = 'visible';
        projectinfo[1].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 520 >= furnix3position ) {
        furnix1[2].classList.add('slideup');
        furnix[2].style.visibility = 'visible';
        projectinfo[2].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 520 >= furnix4position ) {
        furnix1[3].classList.add('slideup');
        furnix[3].style.visibility = 'visible';
        projectinfo[3].style.visibility = 'visible';
    }
})
}


// desktop effect
if ( window.outerWidth > 480 ) {
window.addEventListener('scroll', () => {
    if ( window.pageYOffset + 520 >= rwhrposition ) {
            for (i = 0; i < furnix.length; i++){
                furnix1[i].classList.add('slideup');
                furnix[i].style.visibility = 'visible';
                projectinfo[i].style.visibility = 'visible';
            }
        } else {};
    if ( window.pageYOffset + 550 >= rwhrposition ) {
        rwhr.classList.add('slideright');
        rwhr.style.visibility = 'visible';
    } else {}

    if ( window.pageYOffset + 550 >= srhrposition ) {
        srhr.classList.add('slideright');
        srhr.style.visibility = 'visible';
    } else {}
    
})
};