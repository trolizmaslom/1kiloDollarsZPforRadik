jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

var scroller=jQuery.browser.webkit ? "body": "html";

/* scrollUp */
function scrollUp(block,targetBlock, callback) {

    $(block).click(function(e){
        var target = $(targetBlock).offset().top;

        $(scroller).animate({scrollTop:target},800, callback());
        return false;

        e.preventDefault();
    });
}

function oneHeightItems(){

    function oneHeight(block){
        var height=0;
        block.removeAttr('style');
        block.each(function(){
            if($(this).height()>height){
                height=$(this).height();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.oneHeight'));
}
function oneHeightItems2(){

    function oneHeight(block){
        var height=0;
        block.removeAttr('style');
        block.each(function(){
            if($(this).height()>height){
                height=$(this).height();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.oneHeight2'));
}

/*scroll animation*/
function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}

/*GO TO href*/
function goTo(){
    $('.header-menu a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-65;
        $(scroller).animate({scrollTop:target},500);
    });
}

// cut text script

function cutText(){
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function(){
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if(text.length > value && value > 0){
            var newText = text.substring(0,value) + filler;
            $(this).text(newText);
        }
    });
};


function afterScrool(){
    console.log('s');
    $('.header-menu-sendwich-wrap').click();

};


/* DOCUMENT READY  */
$(document).ready(function() {
    oneHeightItems();
    oneHeightItems2();
    $('.footer_placeholder').height($('.footer').outerHeight());
    scrollUp($('.header-menu-main ul li a[href="#about-us"]'),$('#about-us'), afterScrool);
    scrollUp($('.header-menu-main ul li a[href="#clients"]'),$('#clients'), afterScrool);
    scrollUp($('.header-menu-main ul li a[href="#slider"]'),$('#slider'), afterScrool);
    scrollUp($('.header-menu-main ul li a[href="#contact-form"]'), $('#contact-form'), afterScrool);
    scrollUp($('.top-block-scroll-button a'),$('#about-us'));
    scrollUp($('.button-promote'),$('#contact-form'));
    //goTo();
    //animationBlock($('.setion-animate'));
});

$(window).load(function(){

    /* Scroll Reveal*/
    window.sr = ScrollReveal({
        reset: true
    });
    sr.reveal('.scroll-anim');


});

$(window).resize(function() {
    oneHeightItems();
    oneHeightItems2();
    $('.footer_placeholder').height($('.footer').outerHeight());
});