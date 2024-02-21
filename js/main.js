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
}, 2000);

//final banner  
//inicio servicios
//inicio cards
const toggleButtons = document.querySelectorAll('.toggle-info');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const extraInfo = button.nextElementSibling;
    extraInfo.style.display = extraInfo.style.display === 'block' ? 'none' : 'block';
  });
});
//final cards
//final servicios