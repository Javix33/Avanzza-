//inicio banner
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
}

setInterval(function() {
  changeSlide(1);
}, 5000);

//final banner  
//inicio servicios
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.cardAction');
  buttons.forEach(function (button) {
      button.addEventListener('click', function (event) {
          var additionalInfo = this.nextElementSibling;
          additionalInfo.classList.toggle('hidden');
          event.stopPropagation();
      });
  });
});
//final servicios
//inicio menu
let menu = document.querySelector('.hamburger');

function toggleMenu(event) {
    menu.classList.toggle('is-active');
    let navMenu = document.querySelector(".menuppal");
    navMenu.classList.toggle("is_active");
}

menu.addEventListener('click', toggleMenu, false);

document.addEventListener('DOMContentLoaded', function () {
    let mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            toggleMenu(event);
        });
    });
});

//final menu
//button back
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });
  
  $('.go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  })
});