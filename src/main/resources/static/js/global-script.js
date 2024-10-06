document.addEventListener('DOMContentLoaded', () => {
    const mainWrap = document.getElementsByClassName('main-wrap'); // 여러 요소 선택

    for (let i = 0; i < mainWrap.length; i++) {
        mainWrap[i].classList.add('main-visible'); // 각 요소에 fade-in 효과
    }
    // 네비게이션 링크 클릭 이벤트
    $('nav ul li a').click(function(e) {
        e.preventDefault(); // 기본 동작 방지 (바로 이동하지 않도록)

        // 클릭한 링크의 href 속성 (예: #header, #resume 등) 가져오기
        var targetSection = $(this).attr('href');
        var headerHeight = $('#header').outerHeight(); // 헤더 높이 가져오기

        // 해당 섹션으로 스크롤 애니메이션 적용
        $('html, body').animate({
            scrollTop: $(targetSection).offset().top - headerHeight
        }, 100, 'linear'); // 500ms 동안 스크롤 (원하는 대로 조정 가능)
    });
});
