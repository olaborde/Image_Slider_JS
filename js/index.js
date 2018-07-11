var slideIndex = 0;

function showSlides (indes){
  var slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll('.dot-navigation');

  if(index >= slides.length){
    slideIndex = 0
  }
  if(index < 0){
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i <slides.length; i++){
    slides[i].style.display = "none";
    dots[i].classList.remove("active-dot");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.remove("active-dot");
}