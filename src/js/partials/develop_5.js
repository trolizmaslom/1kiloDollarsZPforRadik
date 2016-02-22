$(document).ready(function(){
    $('.troll-slider').trollSlider();
    $(".active-slide .various").fancybox({
        fitToView   : true,
        autoSize    : true,
        openEffect  : 'none',
        closeEffect : 'none',
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $(".active-slide .various.frame").fancybox({
        maxWidth : '640',
        fitToView   : true,
        autoSize    : true,
        openEffect  : 'none',
        closeEffect : 'none',
        scrolling : 'auto',
        preload   : true,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
});
$(window).load(function(){
});
$(window).resize(function(){

});