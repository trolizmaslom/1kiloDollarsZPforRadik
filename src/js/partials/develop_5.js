var trollSlider = {
    settings : {
        showItems : 3,
        dots:true,
        arrows:true,
        triger:false,
        animateDuration: '500ms'
    },
     actualDot: function(){
        $('#dots button').removeClass('actual')
        var i = $('.active-slide').attr('data-dot');
        $('#dots button[data-dot='+i+']').addClass('actual');

    },
    indexSlide: function(){
        var slider = $('.troll-slider');
        $('.one-slide').removeClass('second active-slide third unactive-slide');
        slider.find('.one-slide[data-slide=1]').addClass('active-slide');
        slider.find('.active-slide').next().addClass('second');
        slider.find('.second').next().addClass('third');
        $('.one-slide').each(function() {
            var i = $(this).attr('data-slide');
            if(i>trollSlider.settings.showItems || i<=0 ){$(this).addClass('unactive-slide');}
        });
    },
    init : function(slider){
        var i = 1;
        var numItems = $('.one-slide').length+1;

        var dots ='';
        if (!$('.one-slide').attr('data-slide')){
            $('.one-slide').each(function() {
                $(this).attr({ 'data-slide': i, 'data-dot': i });
                var imgLink= $(this).find('.image').find('img').attr('src');
                dots = dots+'<li><button data-dot="'+i+'" style="background-image:url(../'+imgLink+')"></button></li>';
                i++;

            });
        };
        if ($('.one-slide[data-slide=0]').length==0){
            var slide = $('.one-slide:last-child');
             $('.one-slide:last-child').remove();
             slide.attr('data-slide', 0 );
             $('.troll-slider').prepend(slide);
         };
        trollSlider.indexSlide();




        if($('#arrows').length==0 && trollSlider.settings.arrows == true){slider.parent().append('<div id="arrows"><button id="prev-slide" class="prev-slide slider-arrows"></button><button id="next-slide" class="next-slide slider-arrows"></button></div>')};
        if($('#dots').length==0 && trollSlider.settings.dots == true){slider.parent().append('<ul id="dots">'+dots+'</ul>')};
        trollSlider.actualDot();
    },
    clickDot: function(object){
        var define = object.attr('data-dot') - $('.active-slide').attr('data-dot');
        if (define<0){for (var i = 0; i<Math.abs(define); i++) {trollSlider.prevSlide();}};
        if(define>0){for (var i = 0; i<define; i++) {trollSlider.nextSlide();}};
    },
    nextSlide: function (){
            if(!trollSlider.settings.triger){
                trollSlider.settings.triger = true;
                $('.active-slide .image').attr("style", "animation : animateActiveSlideNext "+trollSlider.settings.animateDuration+" linear;");
                $('.second .image').attr("style", "animation : animateSecondSlideNext "+trollSlider.settings.animateDuration+" linear;");
                $('.third .image').attr("style", "animation : animateThirdSlideNext "+trollSlider.settings.animateDuration+" linear;");
                $('.one-slide[data-slide="4"] .image').attr("style", "animation : animateFourSlideNext "+trollSlider.settings.animateDuration+" linear;");
                $('.one-slide[data-slide="0"] .image').removeAttr("style");
                 $('.one-slide').each(function() {
                    var x = $(this).attr('data-slide');
                    x--;
                    $(this).attr({ 'data-slide': x });
                });

                 var numItems = $('.one-slide').length-1;
                 var slide = $('.one-slide[data-slide=-1]');
                 $('.one-slide[data-slide=-1]').remove();
                 slide.attr('data-slide', numItems );
                 $('.troll-slider').append(slide);
                 trollSlider.indexSlide();
                 trollSlider.actualDot();
                 trollSlider.settings.triger=false;
             }
    },
     prevSlide: function(){
         if(!trollSlider.settings.triger){
                trollSlider.settings.triger = true;
                $('.active-slide .image').attr("style", "animation : animateActiveSlidePrev "+trollSlider.settings.animateDuration+" linear;");
                $('.second .image').attr("style", "animation : animateSecondSlidePrev "+trollSlider.settings.animateDuration+" linear;");
                $('.third .image').attr("style", "animation : animateThirdSlidePrev "+trollSlider.settings.animateDuration+" linear;");
                $('.one-slide[data-slide="0"] .image').attr("style", "animation : animateZeroSlidePrev "+trollSlider.settings.animateDuration+" linear;");
                $('.one-slide[data-slide="4"] .image').removeAttr("style");
                 $('.one-slide').each(function() {
                    var x = $(this).attr('data-slide');
                    x++;
                    $(this).attr({ 'data-slide': x });
                });
                 var numItems = $('.one-slide').length;
                 var slide = $('.one-slide:last-child');
                 $('.one-slide:last-child').remove();
                 slide.attr('data-slide', 0 );
                 $('.troll-slider').prepend(slide);
                 trollSlider.indexSlide();
                 trollSlider.actualDot();
                 trollSlider.settings.triger=false;
             }
    }

}
$(document).ready(function(){
    trollSlider.init($('.troll-slider'));
    $('#next-slide').on('click', function(){
        trollSlider.nextSlide();
    });
    $('#prev-slide').on('click', function(){
        trollSlider.prevSlide();
    });
    $('#dots button').on('click', function(){
        trollSlider.clickDot($(this));
    });
});

$(window).load(function(){

});

$(window).resize(function(){
     trollSlider.init($('.troll-slider'));
});