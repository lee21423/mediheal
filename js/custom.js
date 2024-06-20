$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    const mainContentSlide = new Swiper('.main-content-slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

});







