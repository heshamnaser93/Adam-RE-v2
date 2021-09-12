/*---------------- Calling Select2 ---------------------*/
$(document).ready(function() {
    $('.js-example-basic-single').select2({});

    $('.select2-header').select2({
        dropdownCssClass: "head-s2-width"
    });

    $('.jSelectBox').select2({
        // containerCssClass: "error",
        dropdownCssClass: "filtering-select2"
    });
});
/*---------------- Calling Select2 ---------------------*/





/*---------------- Solving select2 focus problem when tabbing ---------------------*/
$(document).on('keydown', '.select2', function(e) {
    if (e.originalEvent && e.which == 40) {
        e.preventDefault();
        $(this).siblings('select').select2('open');
    }
});

$('select').select2({
    selectOnClose: true
});
/*---------------- Solving select2 focus problem when tabbing ---------------------*/





/*---------------- Open Select2 Dropdown on focus ---------------------*/
$(document).on('focus', '.select2-selection.select2-selection--single', function (e) {
    $(this).closest(".select2-container").siblings('select:enabled').select2('open');
});

// steal focus during close - only capture once and stop propogation
$('select.select2').on('select2:closing', function (e) {
    $(e.target).data("select2").$selection.one('focus focusin', function (e) {
        e.stopPropagation();
    });
});
/*---------------- Open Select2 Dropdown on focus ---------------------*/
