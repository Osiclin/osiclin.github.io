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


var furnix = document.getElementsByClassName('furnix');
var hr = document.getElementById('hr');
var rworks = document.getElementById('rworks');
var projectinfo = document.getElementsByClassName('projectinfo');

for (i = 0; i < furnix.length; i++){
    furnix[i].style.visibility = 'hidden';
}

for (i = 0; i < furnix.length; i++){
    projectinfo[i].style.visibility = 'hidden';
}

hr.style.visibility = 'hidden';


// mobile effect
if ( window.outerWidth <= 480 ) {
window.addEventListener('scroll', () => {
    if ( document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
            furnix[0].classList.add('slideleft');
            furnix[0].style.visibility = 'visible';
        } else {}
        if ( document.body.scrollTop > 482 || document.documentElement.scrollTop > 482 ) {
                projectinfo[0].style.visibility = 'visible';
        }

    if ( document.body.scrollTop > 700 || document.documentElement.scrollTop > 700 ) {
            furnix[1].classList.add('slideright');
            furnix[1].style.visibility = 'visible';
        } else {}
        if ( document.body.scrollTop > 877 || document.documentElement.scrollTop > 877 ) {
            projectinfo[1].style.visibility = 'visible';
    }
    if ( document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100 ) {
            furnix[2].classList.add('slideup');
            furnix[2].style.visibility = 'visible';
        } else {}
        if ( document.body.scrollTop > 1277 || document.documentElement.scrollTop > 1277 ) {
            projectinfo[2].style.visibility = 'visible';
    }
    if ( document.body.scrollTop > 130 || document.documentElement.scrollTop > 130 ) {
        hr.style.visibility = 'visible';
        hr.classList.add('slideright');
    } else {}
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
        hr.classList.add('slideright');
        hr.style.visibility = 'visible';
    }
    
})
};
