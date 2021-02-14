$('body').hide().fadeIn(2000);

$('.mbutton').on('click', function() {
    $('#rworks').slideDown()
})


$('#hb').on('click', function() {
    $('#myLinks').slideToggle(600);
})


const mylinks = document.getElementById('myLinks');
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
var serviceBlock = document.getElementsByClassName('service-block');
var se = document.getElementsByClassName('se');




var rwhrposition = rwhr.offsetTop;
var srhrposition = srhr.offsetTop;
var furnix1position = furnix1[0].offsetTop;
var furnix2position = furnix1[1].offsetTop;
var furnix3position = furnix1[2].offsetTop;
var furnix4position = furnix1[3].offsetTop;
var furnix5position = furnix1[4].offsetTop;
var service1position = serviceBlock[0].offsetTop;
var service2position = serviceBlock[1].offsetTop;
var service3position = serviceBlock[2].offsetTop;


for (i = 0; i < furnix.length; i++){
    furnix[i].style.visibility = 'hidden';
}

for (i = 0; i < furnix.length; i++){
    projectinfo[i].style.visibility = 'hidden';
}

for (i = 0; i < se.length; i++){
    se[i].style.visibility = 'hidden';
}
rwhr.style.visibility = 'hidden';
srhr.style.visibility = 'hidden';



// mobile effect
if ( window.outerWidth <= 480 ) {
window.addEventListener('scroll', () => {
    if ( window.pageYOffset + 350 >= rwhrposition ){
        rwhr.classList.add('slideright');
        rwhr.style.visibility = 'visible';  
    }
    if ( window.pageYOffset + 350 >= srhrposition ){
        srhr.classList.add('slideright');
        srhr.style.visibility = 'visible';
    }
    if ( window.pageYOffset + 380 >= furnix1position ) {
        furnix1[0].classList.add('slideup');
        furnix[0].style.visibility = 'visible';
        projectinfo[0].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 380 >= furnix2position ) {
        furnix1[1].classList.add('slideup');
        furnix[1].style.visibility = 'visible';
        projectinfo[1].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 380 >= furnix3position ) {
        furnix1[2].classList.add('slideup');
        furnix[2].style.visibility = 'visible';
        projectinfo[2].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 380 >= furnix4position ) {
        furnix1[3].classList.add('slideup');
        furnix[3].style.visibility = 'visible';
        projectinfo[3].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 380 >= furnix5position ) {
        furnix1[4].classList.add('slideup');
        furnix[4].style.visibility = 'visible';
        projectinfo[4].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 360 >= service1position ) {
        serviceBlock[0].classList.add('slideup');
        se[0].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 360 >= service2position ) {
        serviceBlock[1].classList.add('slideup');
        se[1].style.visibility = 'visible';
    }
    if ( window.pageYOffset + 360 >= service3position ) {
        serviceBlock[2].classList.add('slideup');
        se[2].style.visibility = 'visible';
    }
})
}


// desktop effect
if ( window.outerWidth > 480 ) {
window.addEventListener('scroll', () => {
    if ( window.pageYOffset + 400 >= rwhrposition ) {
            for (i = 0; i <= 2; i++){
                furnix1[i].classList.add('slideup');
                furnix[i].style.visibility = 'visible';
                projectinfo[i].style.visibility = 'visible';
            }
        } else {};
     if ( window.pageYOffset >= rwhrposition ) {
            for (i = 3; i < 5; i++){
                furnix1[i].classList.add('slideup');
                furnix[i].style.visibility = 'visible';
                projectinfo[i].style.visibility = 'visible';
            }
        } else {};
    if ( window.pageYOffset + 400 >= rwhrposition ) {
        rwhr.classList.add('slideright');
        rwhr.style.visibility = 'visible';
    } else {}

    if ( window.pageYOffset + 400 >= srhrposition ) {
        srhr.classList.add('slideright');
        srhr.style.visibility = 'visible';
    } else {}
    if ( window.pageYOffset + 400 >= service1position ) {
        for ( i = 0; i <= serviceBlock.length; i++) {
            serviceBlock[i].classList.add('slideup');
            se[i].style.visibility = 'visible';
        }
    } else {}
})
};


//change theme
const toggle = document.getElementById('toggle');
const msg = document.getElementById('msg');
const toggleSwitch = document.getElementById('toggle-switch');
const body = document.getElementsByTagName('body');
const sbt = document.getElementsByClassName('service-block');
const iconS = document.getElementsByClassName('icon-s');
const shead = document.getElementsByClassName('service-head');
const sname = document.getElementById('sname');
const rw = document.getElementsByClassName('rw');
const serv = document.getElementsByClassName('serv');
const mypics = document.getElementsByClassName('mypics');
const surface = document.getElementById('surface');
const fas = document.getElementsByClassName('fas');
const fab = document.getElementsByClassName('fab');
const hr = document.getElementsByTagName('hr');
const fa = document.getElementsByClassName('fa-angle-down');
const foot = document.getElementById('foot');
const myname = document.getElementsByClassName('myname');
const header = document.getElementsByTagName('header');
const topnav = document.getElementsByClassName('topnav');
const activ = document.getElementsByClassName('activ');
const menufont = document.getElementsByClassName('menufont');


toggle.addEventListener('click',()=>{
    if(toggle.className == 'toggle-white'){
        toggle.classList.remove('toggle-white');
        toggleSwitch.classList.remove('toggle-switch-black');
        toggle.classList.add('toggle-black');
        toggleSwitch.classList.add('toggle-switch-white');
        body[0].style.backgroundColor = "#e6e2c8";
        body[0].style.color = "#474646";
        msg.style.color = "black";
        for(i=0; i<sbt.length; i++) {
            sbt[i].classList.add('service-block-theme');
            iconS[i].classList.add('icon-s-theme');
            shead[i].classList.add('service-head-theme');
        }
        sname.style.color = "black";
        serv[0].style.backgroundColor = "#e6e2c8";
        surface.style.backgroundColor = "gray";
        rw[0].style.backgroundColor = "#e6e2c8";
        mypics[0].style.filter = "grayscale()";
        for(a = 0; a < furnix.length; a++){
            furnix[a].style.filter = "grayscale()";
        }
        for(b = 0; b < 4; b++){
            fas[b].classList.add('fas1');
            fab[b].classList.add('fab1');
        }
        for(c = 0; c < 5; c++){
            hr[c].style.backgroundColor = "turquoise";
            hr[c].style.color = "turquoise";
            hr[c].style.borderColor = "turquoise";
        }
        for(d = 0; d < fa.length; d++){
            fa[d].style.color = "black";
        }
        foot.style.color = "black";
        myname[0].classList.add('myname1');
        if ( window.outerWidth <= 480 ) {
            header[0].style.backgroundColor = "#e6e2c8";
            topnav[0].style.backgroundColor = "#e6e2c8";
        }
        hb.style.color = "black";
        hb.style.backgroundColor = "#e6e2c8";
        mylinks.style.backgroundColor = "#e6e2c8";
        for (f = 0; f < menufont.length; f++) {
            menufont[f].style.color = "black";
            menufont[f].style.backgroundColor = "#e6e2c8";
        }
        
    }
    else{
        toggle.classList.remove('toggle-black');
        toggleSwitch.classList.remove('toggle-switch-white');
        toggle.classList.add('toggle-white');
        toggleSwitch.classList.add('toggle-switch-black');
        body[0].style.backgroundColor = "black";
        body[0].style.color = "white";
        msg.style.color = "white";
        for(i=0; i<sbt.length; i++) {
            sbt[i].classList.remove('service-block-theme');
            iconS[i].classList.remove('icon-s-theme');
            shead[i].classList.remove('service-head-theme');
            sname.style.color = "turquoise";
        }
        serv[0].style.backgroundColor = "black";
        surface.style.backgroundColor = "gray";
        rw[0].style.backgroundColor = "black";
        mypics[0].style.filter = "none";
        for(a = 0; a < furnix.length; a++){
            furnix[a].style.filter = "none";
        }
        for(b = 0; b < 4; b++){
            fas[b].classList.remove('fas1');
            fab[b].classList.remove('fab1');
        }
        for(c = 0; c > 2; c++){
            hr[c].style.backgroundColor = "turquoise";
            hr[c].style.color = "turquoise";
            hr[c].style.borderColor = "turquoise";
        }
        for(d = 0; d < fa.length; d++){
            fa[d].style.color = "turquoise";
        }
        foot.style.color = "white";
        myname[0].classList.remove('myname1');
        if ( window.outerWidth <= 480 ) {
            header[0].style.backgroundColor = "black";
            topnav[0].style.backgroundColor = "black";
        }
        hb.style.color = "turquoise";
        hb.style.backgroundColor = "black";
        mylinks.style.backgroundColor = "black";
        for (f = 0; f < menufont.length; f++) {
            menufont[f].style.color = "turquoise";
            menufont[f].style.backgroundColor = "black"
        }
    }
    
}, false);



var text = "<html>";
var textType = document.getElementById('texttype');

text += '&lt!DOCTYPE html&gt <br>';
text += '&lthtml&gt <br>';
text += "&lttitle&gtcoding & programming&lttitle&gt <br>";
text += '&ltstyle type="text/css"&gt <br>';
text += "body{ <br>";
text += "font-family: cursive; <br>";
text += "font-size: 2rem; <br>";
text += "&lt/style&gt <br>";
text += "&lt/head&gt <br>";
text += "&lt/html&gt ";

textType.innerHTML = text;


