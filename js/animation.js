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

$('.furnix').on('click', function() {
    $('.furnix').animate({right: '250px'});
});

