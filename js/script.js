$('.toggle').on('click', function () {
    $('.responsive_nav').toggleClass('show');
});

var stickyNavTop = $('nav').offset().top;

var stickyNav = function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }

}


// Gallery section script 

var nav = $('.tabNav');
var line = $('.tabLine').addClass('line');
var active = nav.find('.active');

var pos = 0;
var wid = 0;

$('.filterOption li').click(function () {
    var ourClass = $(this).attr('class');
    $('.filterOption li').removeClass('active');
    $(this).addClass('active');

    var position = $(this).position();
    var width = $(this).width();



    if (position.left >= pos) {
        line.animate({
            width: ((position.left - pos) + width)
        }, 300, function () {
            line.animate({
                width: width, left: position.left
            }, 150)
        })
    } else {
        line.animate({
            left: position.left,
            width: ((pos - position.left) + width)
        }, 300, function () {
            line.animate({
                width: width
            }, 150)
        })
    }

    pos = position.left;
    wid = width;

    if (ourClass == 'all') {
        $('.ourHolder').children('.item').show();
    } else {
        $('.ourHolder').children('.item:not(.' + ourClass + ')').hide();
        $('.ourHolder').children('.item.' + ourClass + '').show();
    }

});


// Testimonial section script 


function checkForDisable() {
    var current = $('.recipe.active');
    if ($(current).is('.recipe:last')) {
        $('.js-right').addClass('disabled');
    }
    if ($(current).is('.recipe:first')) {
        $('.js-left').addClass('disabled');
    }
}

$('.js-nav').on('click', function () {
    $('.js-nav').removeClass('disabled');

    var current = $('.recipe.active');
    var findNext = $(current).next('.recipe');
    var findPrev = $(current).prev('.recipe');

    var button = $(this);

    $(current).removeClass('active');

    setTimeout(() => {
        if ($(button).hasClass('js-right')) {
            $(findNext).addClass('active');
            checkForDisable();
        }
        if ($(button).hasClass('js-left')) {
            $(findPrev).addClass('active');
            checkForDisable();
        }
    }, 300);

});



$(window).scroll(function () {
    stickyNav();

    var wScroll = $(this).scrollTop();
    $('#camera_img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });


});