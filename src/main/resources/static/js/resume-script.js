document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.resume-box'); // scrollable 클래스를 가진 div 선택

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0 // 요소가 화면에 나타나기 시작하면 observer가 트리거됨
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 요소가 보이기 시작하면 visible 클래스를 추가
                entry.target.classList.add('visible');
            } else {
                // 요소가 화면에서 벗어났을 때 visible 클래스를 제거
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});