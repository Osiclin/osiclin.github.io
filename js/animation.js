$('.aaa').hide().delay(600).fadeIn(1000);
$('.aaaa').hide().delay(400).fadeIn(1000);
$('.aaaaa').hide().fadeIn(500);
$('.mypics').hide().delay(1000).fadeIn(1500);
$('.msg1').hide().delay(300).slideDown(500);
$('.msg2').hide().delay(500).slideDown(600);
$('.msg3').hide().delay(700).slideDown(700);


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

var furnix = document.getElementsByClassName('furnix');
var furnix1 = document.getElementById('furnix1');
var furnix2 = document.getElementById('furnix2');
var furnix3 = document.getElementById('furnix3');
var furnix4 = document.getElementById('furnix4');
var rwhr = document.getElementById('rwhr');
var srhr = document.getElementById('srhr');
var rworks = document.getElementById('rworks');
var projectinfo = document.getElementsByClassName('projectinfo');

var rwhrposition = rwhr.offsetTop;
var srhrposition = srhr.offsetTop;
var furnix1position = furnix1.offsetTop;
var furnix2position = furnix2.offsetTop;
var furnix3position = furnix3.offsetTop;
var furnix4position = furnix4.offsetTop;



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
    if ( window.pageYOffset + 450 >= rwhrposition ){
        rwhr.style.visibility = 'visible';
        rwhr.classList.add('slideright');
    }
    if ( window.pageYOffset + 450 >= srhrposition ){
        srhr.style.visibility = 'visible';
        srhr.classList.add('slideright');
    }
    if ( window.pageYOffset + 440 >= furnix1position ) {
        furnix[0].classList.add('slideup');
        furnix[0].style.visibility = 'visible';
        projectinfo[0].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 440 >= furnix2position ) {
        furnix[1].classList.add('slideup');
        furnix[1].style.visibility = 'visible';
        projectinfo[1].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 440 >= furnix3position ) {
        furnix[2].classList.add('slideup');
        furnix[2].style.visibility = 'visible';
        projectinfo[2].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 440 >= furnix4position ) {
        furnix[3].classList.add('slideup');
        furnix[3].style.visibility = 'visible';
        projectinfo[2].style.visibility = 'visible';
    }
})
}


// desktop effect
if ( window.outerWidth > 480 ) {
window.addEventListener('scroll', () => {
    if ( document.body.scrollTop > 230 || document.documentElement.scrollTop > 230 ) {
            for (i = 0; i < furnix.length; i++){
                furnix[i].classList.add('slideup');
                furnix[i].style.visibility = 'visible';
            }
        } else {};
    if ( document.body.scrollTop > 515 || document.documentElement.scrollTop > 515 ) {
        for (i = 0; i < furnix.length; i++){
            projectinfo[i].style.visibility = 'visible';
        }
    } else {}
    
    if ( window.outerWidth > 480 && document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        rwhr.classList.add('slideright');
        rwhr.style.visibility = 'visible';
    } else {}

    if ( window.outerWidth > 480 && document.body.scrollTop > 709 || document.documentElement.scrollTop > 709 ) {
        srhr.classList.add('slideright');
        srhr.style.visibility = 'visible';
    } else {}
    
})
};
