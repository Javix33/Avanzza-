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

// Cambiar de diapositiva cada 2 segundos
setInterval(function() {
  changeSlide(1);
}, 5000);

//final banner  
//inicio servicios
//inicio cards
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.cardAction');
  buttons.forEach(function (button) {
      button.addEventListener('click', function (event) {
          var additionalInfo = this.nextElementSibling;
          additionalInfo.classList.toggle('hidden'); // Alternar la clase 'hidden'
          event.stopPropagation(); // Detener la propagación del evento para evitar conflictos
      });
  });
});
//final cards
//final servicios
//inicio menu
// selector
let menu = document.querySelector('.hamburger');

// Método para alternar el menú
function toggleMenu(event) {
    console.log("Toggle menu function is triggered.");
    menu.classList.toggle('is-active');
    let navMenu = document.querySelector(".menuppal");
    navMenu.classList.toggle("is_active");
}

// Evento para el menú hamburguesa
menu.addEventListener('click', toggleMenu, false);

// Escuchador de eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event is triggered.");

    // Event listener para el clic en los enlaces del menú móvil
    let mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Cerramos el menú al hacer clic en un enlace del menú móvil
            console.log("Mobile link clicked.");
            toggleMenu(event);
        });
    });
});

//final menu
//button back
$(document).ready(function() {
  // Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });
  
  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300);
  })
});