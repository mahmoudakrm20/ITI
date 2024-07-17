$(document).ready(function() {
    $('.tabs li').click(function() {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').removeClass('block').eq($(this).index()).addClass('block');
    });
});
