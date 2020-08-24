$(document).ready(function () {

    $('.top-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-thumbnails'
    });
    $('.slider-nav-thumbnails').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.top-slider__inner',
        dots: false,
        centerMode: true
    });



    //remove active class from all thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

    //set active class to first thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.top-slider__inner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
        $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });

    //UPDATED

    $('.top-slider__inner').on('afterChange', function (event, slick, currentSlide) {
        $('.content').hide();
        $('.content[data-id=' + (currentSlide + 1) + ']').show();
    });

    //slider counter
    let slickSlider = $('.top-slider__inner');
    let currentSlide = slickSlider.slick('slickCurrentSlide') + 1; //текущий слайд
    let totalSlides = slickSlider.slick('getSlick').slideCount; //общее кол-во слайдов

    let current_counter = $('.counter-current'); //блок,куда писать текущий слайд
    let total_counter = $('.counter-total'); //блок,куда писать общее кол-во слайдов
    current_counter.text(addZero(currentSlide));
    total_counter.text(addZero(totalSlides));

    //функция перелистывания функции на 1 слайд вперед
    slickSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1; //если текущ слайд неизвестен,он равен 0
        current_counter.text(addZero(i));
        total_counter.text(addZero(totalSlides));
    });


    function addZero(num) {
        if (num < 9) {
            num = `0${num}`
        }
        return num;
    }
});