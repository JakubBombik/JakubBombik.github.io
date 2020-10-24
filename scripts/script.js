let video = document.querySelector('.home-video');
let navigation = document.getElementById("navigation");
const burger = document.querySelector(".burger");
const backgroundBlock = document.querySelector(".background-block");
let portfolio = document.querySelectorAll("navigation");


// Navigation - burger
burger.addEventListener("click", function(){
    navigation.classList.toggle("active");
})
backgroundBlock.addEventListener("click", function(){
    navigation.classList.toggle("active");
})

// Homepage Video
window.scrollY > 0 ? navigation.classList.add("sticky") : navigation.classList.remove("sticky");
window.addEventListener('scroll' , function(){
    // change of theme navigation bar
    navigation.classList.toggle("sticky", window.scrollY > 0);
    // opacity on homepage
    let value = 1 + window.scrollY/ -600;
    video.style.opacity = value;
    
    
})

// 3D cards
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    easing:                 "cubic-bezier(.03,.98,.52,.99)",
});

// PROJECT GALLERY
$('.project').click(function(){
    $(this).toggleClass(('opened'));
    $(this).toggleClass(('closed'));
    $('.backgroun-zoom').toggleClass(('opened'));
});
$('.backgroun-zoom').click(function(){
    $('.project').removeClass(('opened'));
    $('.project').addClass(('closed'));
    $('.backgroun-zoom').removeClass(('opened'));
});







