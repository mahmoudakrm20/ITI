$(document).ready(function() {
    let currentIndex = 0;
    const images = $('.container img').toArray();

    function showImage(index) {
        const src = $(images[index]).attr('src');
        $('.slider img').attr('src', src);
        $('.slider').css('display', 'flex');
        currentIndex = index;
    }

    $('.container img').click(function() {
        currentIndex = images.indexOf(this);
        showImage(currentIndex);
    });

    $('.slider').click(function(e) {
        if (!$(e.target).is('img') && !$(e.target).is('.nav-button')) {
            $('.slider').css('display', 'none');
        }
    });

    $('.prev').click(function() {
        if (currentIndex > 0) {
            currentIndex = currentIndex - 1;
        } else {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    });

    $('.next').click(function() {
        if (currentIndex < images.length - 1) {
            currentIndex = currentIndex + 1;
        } else {
            currentIndex = 0;
        }
        showImage(currentIndex);
    });
});

