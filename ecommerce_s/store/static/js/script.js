document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function changeSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active')
    }

    if (slides.length > 0) {
        slides[currentSlide].classList.add('active');
    
    
       if (slides.length > 1) {
             setInterval(changeSlide, 5000);
        }
    }    
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.querySelector('.dropdown .dropbtn');
    const dropdownContent = document.querySelector('.dropdown .dropdown-content');


    registerBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('active');
        if (dropdownContent.classList.contains('active')) {
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';    
        } else {
            dropdownContent.style.maxHeight = '0'
        }
    });
});