/*slide toggle log dropdown in header*/
$(document).ready(function () {
    $('#login_btn_id').click(function () {
        $('.add-list .login-drop').slideToggle();
    });

    $('#menu_login_btn_id').click(function () {
        $('.login-drop-container .login-drop').toggleClass("hide-drop show-drop");
        console.log("hi")
    });
});
