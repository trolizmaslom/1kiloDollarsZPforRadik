
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

        var windowWidth = screen.width;
        var viewport = $("meta[name=viewport]");
        viewport.attr('content', 'width=device-width');
        if(windowWidth<=640){
            viewport.attr('content', 'width=640');
        }

    };

}

$(document).ready(function(){

    sedwichMenu();

});

$(window).load(function(){

    changeViewport();

});

$(window).resize(function(){

});