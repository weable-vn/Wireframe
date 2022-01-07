$(document).ready(function(){
    $('.horse .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.horse .slider-nav'
    });
    $('.horse .slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.horse .slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        infinite: true,
    });

    $('.horse .slider-nav .item-nav').click(function() {
        $('.horse .slider-for .item .img-houre img').addClass('show')
    });
})