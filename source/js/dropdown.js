$(document).ready(function () {
    $('.newItem__btn').click(function () {
        const parent = $(this).closest('.newItem');

        parent.toggleClass('show');
        parent.find('.collapse').toggleClass('show');

        $(this).find('i').toggleClass('bi-chevron-up');
        $(this).toggleClass('open');
    });
});


