// Slider
let slideIndex = 0;
const sliderImages = document.querySelector('.slider .images');

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : sliderImages.children.length - 1;
    sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex < sliderImages.children.length - 1) ? slideIndex + 1 : 0;
    sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
});

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

const toggleMenu = () => {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
};

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('active') && 
        !e.target.closest('.mobile-nav') && 
        !e.target.closest('.menu-toggle')) {
        toggleMenu();
    }
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});