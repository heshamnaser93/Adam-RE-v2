// /*table menu **********/
$.each($('td'), function () {
    $('.prop-menu').click(function () {
        if ($(this).next('div').hasClass('display-hide')) {
            $(this).next('div').removeClass('display-hide');
            $(this).next('div').addClass('display-show');
        } else {
            $(this).next('div').addClass('display-show');
        }
    });

    $('.fa-times').click(function () {
        $(this).next('div').removeClass('display-show');
        $(this).parents('.table-menu').addClass('display-hide');
    });
});