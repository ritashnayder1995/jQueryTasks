$(document).ready(function () {

    console.log($('.btn'));
    console.log($('.blok'));
    $('.btn').css('background-color', 'pink');
    $('.btn').css('padding', '20px');
    $('.btn').css('border', '1px solid red');
});

$('.btn').on('click', function () {
    // $('.blok').css('background-color', 'blue');
    $('.blok').toggleClass('bg');
});

$('.btn-open').on('click', function () {
    // $('.blok').show();
    // $('.blok').fadeIn(1000);
     $('.blok').slideDown(300, function () {
            $('.blok').toggleClass("bg");
        });
});

$('.btn-close').on('click', function () {
    // $('.blok').fadeOut(2000);
    $('.blok').slideUp(300);
});



// ----------------------

