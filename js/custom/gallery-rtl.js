// Main/Product image slider for product page
$('#gallery .main-img-slider').slick({
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    fade:true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 300,
    lazyLoad: 'ondemand',
    asNavFor: '.thumb-nav',
    prevArrow: '<div class="slick-prev"><i class="fas fa-arrow-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fas fa-arrow-right"></i></div>'
});

var sliderNav = $('.slider-nav');
var maxItems = Math.round(sliderNav.parent('div').width() / 201);
if(sliderNav.children('div').length < maxItems) {
    maxItems = sliderNav.children('div').length;
}
// Thumbnail/alternates slider for product page
$('.thumb-nav').slick({
    rtl: true,
    slidesToShow: maxItems,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    centerPadding: '0px',
    asNavFor: '.main-img-slider',
    dots: false,
    centerMode: false,
    draggable: true,
    speed:200,
    focusOnSelect: true
});