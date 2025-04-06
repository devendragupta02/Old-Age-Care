let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Loop back to the first slide if we go past the last slide
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Move the slider to the correct slide
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Change slide on button click
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatically switch slides every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Initialize the first slide
showSlide(currentSlide);
