document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.resume-box');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('opacity-0'); // 보이기 시작하면 opacity 제거
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('opacity-0'); // 안 보이면 opacity 추가
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});


