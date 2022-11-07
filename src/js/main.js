// Menu hambúrguer
$(document).ready(function () {
    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});

// input hover effect
$(document).ready(function() {
    $(".input-group > input").focus(function(e){
        $(this).parent().addClass("input-group-focus");
    }).blur(function(e){
        $(this).parent().removeClass("input-group-focus");
    });
});