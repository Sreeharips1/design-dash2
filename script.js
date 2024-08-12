document.addEventListener('mousemove', (e) => {
    const body = document.querySelector('body');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

window.onscroll = function() {
    const button = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('chatbot-toggle').addEventListener('click', () => {
    const chatbotBox = document.getElementById('chatbot-box');
    chatbotBox.classList.toggle('hidden');
});

document.getElementById('chatbot-close').addEventListener('click', () => {
    const chatbotBox = document.getElementById('chatbot-box');
    chatbotBox.classList.add('hidden');
});

const gallerySlider = document.querySelector('.gallery-slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = gallerySlider.querySelectorAll('img');
let currentIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    gallerySlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

setInterval
