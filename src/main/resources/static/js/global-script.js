document.addEventListener('DOMContentLoaded', () => {
    // const profileBoxes = document.getElementsByClassName('profile-box'); // 여러 요소 선택
    //
    // for (let i = 0; i < profileBoxes.length; i++) {
    //     profileBoxes[i].classList.add('visible'); // 각 요소에 fade-in 효과
    // }
    const mainWrap = document.getElementsByClassName('main-wrap'); // 여러 요소 선택

    for (let i = 0; i < mainWrap.length; i++) {
        mainWrap[i].classList.add('main-visible'); // 각 요소에 fade-in 효과
    }
});