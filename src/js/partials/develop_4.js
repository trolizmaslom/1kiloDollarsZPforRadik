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

$(document).ready(function(){
    inputFocus();
});

$(window).load(function(){

});

$(window).resize(function(){

});