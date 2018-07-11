var SLIDEINDEX = 0;

showSlides(SLIDEINDEX);

function showSlides (index){
  var slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll('.dot-navigation');

  if(index >= slides.length) SLIDEINDEX = 0
  if(index < 0) SLIDEINDEX = slides.length - 1;
  
  for (var i = 0; i <slides.length; i++){
    slides[i].style.display = "none";
    dots[i].classList.remove("active-dot");
  }

  slides[SLIDEINDEX].style.display = "block";
  dots[SLIDEINDEX].classList.remove("active-dot");
}