$('.aaa').hide().delay(600).fadeIn(1000);
$('.aaaa').hide().delay(400).fadeIn(1000);
$('.aaaaa').hide().fadeIn(500);
$('.mypics').hide().delay(1000).fadeIn(1500);
$('.msg1').hide().delay(300).slideDown(500);
$('.msg2').hide().delay(500).slideDown(600);
$('.msg3').hide().delay(700).slideDown(700);


$('#hb').on('click', function() {
    $('#myLinks').slideToggle(600);
})


/*$(window).on('scroll', function() {
    var $window = $(window);
    var $slideText = $('#uwSlide');
    if ($window.outerWidth < 481 && $window.height >= 744) {
        $slideText.animate({'right': '0px'}, 250);
    } else {
        $slideText.stop(true).animate({'right': '360px'}, 250);
    }
});*/

var furnix = document.getElementById('furnix');
var furnix1 = document.getElementById('furnix1');

furnix.style.display = 'none';
furnix1.style.display = 'none';

window.addEventListener('scroll', () => {
    if ( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        furnix.style.display = 'block';
        furnix.classList.add('slideleft');
    }
    if ( document.body.scrollTop > 430 || document.documentElement.scrollTop > 430 ) {
        furnix1.style.display = 'block';
        furnix1.classList.add('slideright');
    }
})




