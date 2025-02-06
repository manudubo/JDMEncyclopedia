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