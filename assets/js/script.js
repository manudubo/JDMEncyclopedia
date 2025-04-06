
// Slider 
if (document.querySelector('.slider')) {
    let slideIndex = 0;
    const sliderImages = document.querySelector('.slider .images');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (prevBtn && nextBtn && sliderImages) {
        prevBtn.addEventListener('click', () => {
            slideIndex = (slideIndex > 0) ? slideIndex - 1 : sliderImages.children.length - 1;
            sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
        });

        nextBtn.addEventListener('click', () => {
            slideIndex = (slideIndex < sliderImages.children.length - 1) ? slideIndex + 1 : 0;
            sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
        });
    }
}

// Mobile Menu 
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && mobileNav) {
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
    }
});