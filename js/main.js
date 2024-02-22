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

//final menu