let slideIndex = 0;
const images = document.querySelector('.slider .images');

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : images.children.length - 1;
    images.style.transform = `translateX(-${slideIndex * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex < images.children.length - 1) ? slideIndex + 1 : 0;
    images.style.transform = `translateX(-${slideIndex * 100}%)`;
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Cerrar menu al hacer click fuera
document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// Cerrar menu al seleccionar item
mobileNav.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});