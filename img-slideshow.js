let slideIndex = 0;  // Initialize slide index

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all images initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    // Reset to first image if at the end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Show current image
    slides[slideIndex - 1].style.display = "block";  
    // Call the function again after 5 seconds
    setTimeout(showSlides, 5000);  
}

// Start the slideshow
showSlides();
