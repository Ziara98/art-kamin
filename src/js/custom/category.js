$(document).ready(function () {
    $('.categories__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        appendArrows: $('.categories__inner'),
        prevArrow: $('.category-prev'),
        nextArrow: $('.category-next')
    });
});