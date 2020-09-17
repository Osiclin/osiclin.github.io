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
var rwhr = document.getElementById('rwhr');
var srhr = document.getElementById('srhr');
var rworks = document.getElementById('rworks');
var projectinfo = document.getElementsByClassName('projectinfo');

// var rwhrposition = rwhr.offsetTop;
// console.log(rwhrposition)
// console.log(window.pageYOffset)



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
    if ( document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
            furnix[0].classList.add('slideup');
            furnix[0].style.visibility = 'visible';
        } else {}
        if ( document.body.scrollTop > 440 || document.documentElement.scrollTop > 440 ) {
            projectinfo[0].classList.add('slideright')
            projectinfo[0].style.visibility = 'visible';
        }

    if ( document.body.scrollTop > 630 || document.documentElement.scrollTop > 630 ) {
            furnix[1].classList.add('slideup');
            furnix[1].style.visibility = 'visible';
        } else {}
        if ( document.body.scrollTop > 870 || document.documentElement.scrollTop > 870 ) {
            projectinfo[1].classList.add('slideright')
            projectinfo[1].style.visibility = 'visible';
    }
    if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ) {
            furnix[2].classList.add('slideup');
            furnix[2].style.visibility = 'visible';
        } else {}
        if ( document.body.scrollTop > 1240 || document.documentElement.scrollTop > 1240 ) {
            projectinfo[2].classList.add('slideright')
            projectinfo[2].style.visibility = 'visible';
    }
    if ( document.body.scrollTop > 120 || document.documentElement.scrollTop > 120 ) {
        rwhr.style.visibility = 'visible';
        rwhr.classList.add('slideright');
    } else {}
    // if ( window.pageYOffset > 113 ) {
    //     rwhr.style.visibility = 'visible';
    //     rwhr.classList.add('slideright');
    // } else {}
    if ( document.body.scrollTop > 1430 || document.documentElement.scrollTop > 1430 ) {
        srhr.style.visibility = 'visible';
        srhr.classList.add('slideright');
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
        rwhr.classList.add('slideright');
        rwhr.style.visibility = 'visible';
    } else {}

    if ( window.outerWidth > 480 && document.body.scrollTop > 709 || document.documentElement.scrollTop > 709 ) {
        srhr.classList.add('slideright');
        srhr.style.visibility = 'visible';
    } else {}
    
})
};
