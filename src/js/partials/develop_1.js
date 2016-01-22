
function sedwichMenu(){

    $('.header-menu-sendwich-wrap').click(function(event) {
        if($(window).width()<=1024-$.scrollbarWidth()){
            $(this).toggleClass('active');
            $('.header-menu').stop().slideToggle();
        }
    });


    $(document).on('click touchstart',function (event){
        if($(window).width()<=1024-$.scrollbarWidth()){
            var div = $('.header-main');
            if(div.has(event.target).length === 0 && !$('.header-menu-sendwich-wrap').is(event.target) && $('.header-menu-sendwich-wrap').has(event.target).length === 0){
                $('.header-menu').slideUp();
                $('.header-menu-sendwich-wrap').removeClass('active');
            }
        }
    });

    $(window).resize(function(){

        if($(window).width()>1024){
            $('.header-menu').removeAttr('style');
            $('.header-menu-sendwich-wrap').removeClass('active');
        }

    });

};

function changeViewport(){

    $(window).resize(function(){

        whatViewport();

    });

    function whatViewport(){



        var windowWidth = $(window).width();
        var viewport = document.querySelector("meta[name=viewport]");

        if(windowWidth>640){
            viewport.setAttribute('content', 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0');
        }
        else{
            viewport.setAttribute('content', 'width=640,  user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0');
        }

    };

    whatViewport();
    
}

$(document).ready(function(){

    sedwichMenu();

});

$(window).load(function(){

    //changeViewport();

});

$(window).resize(function(){

});