$(document).ready(function () {
    "use strict";

    //Functions
    var hideAllContent = function () {
            $('.content-item').hide();
        },
        loadContent = function (contentToBeLoaded) {
            hideAllContent();
            $(contentToBeLoaded).show();
        };

    // Navigation bar styling
    $('.nav-item').addClass('nav-mouseOff');

    $('.nav-item').hover(function () {
        $(this).removeClass('nav-mouseOff');
        $(this).addClass('nav-mouseOn');
        $(this).css('cursor', 'pointer');
    }, function () {
        $(this).removeClass('nav-mouseOn');
        $(this).addClass('nav-mouseOff');
        $(this).css('cursor', 'default');
    });

    //Content load based on navigation item click
    hideAllContent();
    $('#content-about-me').show();

    $('.nav-item').on('click', function () {
        var itemClicked = $(this).data('item');
        switch (itemClicked) {
        case 'About Me':
            loadContent($('#content-about-me'));
            break;
        case 'Projects':
            loadContent($('#content-projects'));
            break;
        case 'Portfolio':
            loadContent($('#content-portfolio'));
            break;
        case 'Contact Me':
            loadContent($('#content-contact-me'));
            break;
        }
    });
});