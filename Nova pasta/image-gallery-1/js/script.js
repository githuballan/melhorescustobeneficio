// script.js
const images = document.querySelectorAll('.gallery-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateGallery(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateGallery(currentIndex);
    });
});

// Initialize gallery
updateGallery(currentIndex);