$('.aaa').hide().delay(600).fadeIn(1000);
$('.aaaa').hide().delay(400).fadeIn(1000);
$('.aaaaa').hide().fadeIn(500);
$('.mypics').hide().delay(1000).fadeIn(1500);
$('.msg1').hide().delay(300).slideDown(500);
$('.msg2').hide().delay(500).slideDown(600);
$('.msg3').hide().delay(700).slideDown(700);
$('.projectinfo').hide();



$('.mbutton').on('click', function() {
    $('#rworks').slideDown()
})


$('#hb').on('click', function() {
    $('#myLinks').slideToggle(600);
})


var furnix = document.getElementsByClassName('furnix');
var hr = document.getElementById('hr');
var rworks = document.getElementById('rworks');

for (i = 0; i < furnix.length; i++){
    furnix[i].style.display = 'none';
}

hr.style.display = 'none';
rworks.style.display = 'none';


window.addEventListener('scroll', () => {
    if ( window.outerWidth <= 480 && document.body.scrollTop > 120 || document.documentElement.scrollTop > 120 ) {
            furnix[0].classList.add('slideleft');
            furnix[0].style.display = 'block';
            $('.projectinfo').fadeIn(1000);
        }
    if ( window.outerWidth <= 480 && document.body.scrollTop > 450 || document.documentElement.scrollTop > 450 ) {
            furnix[1].classList.add('slideleft');
            furnix[1].style.display = 'block';
        }
    if ( window.outerWidth <= 480 && document.body.scrollTop > 750 || document.documentElement.scrollTop > 750 ) {
            furnix[2].classList.add('slideleft');
            furnix[2].style.display = 'block';
        }
    if ( window.outerWidth <= 480 && document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        hr.style.display = 'block';
        hr.classList.add('slideright');
    }
    if ( window.outerWidth <= 480 && document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        $('#rworks').fadeIn(1000);
    }
})

window.addEventListener('scroll', () => {
    if ( window.outerWidth > 480 && document.body.scrollTop > 230 || document.documentElement.scrollTop > 230 ) {
        for (i = 0; i < furnix.length; i++){
            furnix[i].classList.add('slideup');
        }
    }

    if ( window.outerWidth > 480 && document.body.scrollTop > 270 || document.documentElement.scrollTop > 270 ) {
            $('.projectinfo').delay(50000).fadeIn(2000);
    }
    
    if ( window.outerWidth > 480 && document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        hr.classList.add('slideright');
        hr.style.display = 'block';
    }
    if ( window.outerWidth > 480 && document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        $('#rworks').fadeIn(1000);
    }
})
