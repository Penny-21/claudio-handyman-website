// // Add this to script.js
// let currentIndex = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-slide');
//     if (index < 0) {
//         currentIndex = slides.length - 1;
//     } else if (index >= slides.length) {
//         currentIndex = 0;
//     } else {
//         currentIndex = index;
//     }
//     const translation = -currentIndex * 100 + '%';
//     document.querySelector('.carousel-container').style.transform = 'translateX(' + translation + ')';
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// // Auto-play the carousel
// setInterval(nextSlide, 5000); // Change the interval as needed (in milliseconds)
