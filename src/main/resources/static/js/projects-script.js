$(document).ready(function(){
    $('.project-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: $('#prevArrow'), //이전 화살표만 변경
        nextArrow: $('#nextArrow'), //다음 화살표만 변경
    });
});