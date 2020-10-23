let video = document.querySelector('.home-video');
let navigation = document.getElementById("navigation");
let portfolio = document.querySelectorAll("navigation");
const burger = document.querySelector(".burger");

// Navigation - burger
burger.addEventListener("click", function(){
    burger.classList.toggle("active");
})

// Homepage Video
window.addEventListener('scroll' , function(){
    // change of theme navigation bar
    navigation.classList.toggle("sticky", window.scrollY > 1);
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
    $('.backgroun-zoom').toggleClass(('opened'));
    $(this).toggleClass(('opened'));
});







