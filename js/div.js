var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: false,
    navigation: {
        nextEl: '.next3',
        prevEl: '.prev3'
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
        init: function(){
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#'+ target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#'+ target).addClass('active');

    if(swiper.isEnd) {
        $('.prev3').removeClass('disabled');
        $('.next3').addClass('disabled');
    } else {
        $('.next3').removeClass('disabled');
    }

    if(swiper.isBeginning) {
        $('.prev3').addClass('disabled');
    } else {
        $('.prev3').removeClass('disabled');
    }
});

$(".js-fav").on("click", function() {
    $(this).find('.heart').toggleClass("is-active");
});