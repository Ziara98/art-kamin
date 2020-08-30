$(document).ready(function () {
    $('.barbeque__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        appendArrows: $('.barbeque__inner'),
        prevArrow: $('.barbeque-prev'),
        nextArrow: $('.barbeque-next')
    });
});