let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Hide all slides by default
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slideIndex to show the next slide
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} // Reset to first slide when it goes past

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Change image every 2 seconds
  setTimeout(showSlides, 2000);
}
