function inputFocus(){
    $('.form_input input,.form_input textarea').focus(function() {
        $(this).parent().find('label').addClass('active');
    });
    $('.form_input input,.form_input textarea').blur(function() {
        if(!$(this).val()){
            $(this).parent().find('label').removeClass('active');
        }
    });
}
function topPreload(){
    console.log('load');
}

$(document).ready(function(){
    inputFocus();
    topPreload();
});

$(window).load(function(){
    topPreload();
});

$(window).resize(function(){

});