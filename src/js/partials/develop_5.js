var trollSlider = {
    settings : {
        showItems : 3,
        dots:true,
        arrows:true
    },
    init : function(slider){
        var i = 1;
        var numItems = $('.one-slide').length+1;

        var dots ='';
        if (!$('.one-slide').attr('data-slide')){
            $('.one-slide').each(function() {
                $(this).attr({ 'data-slide': i });
                var imgLink= $(this).find('.image').find('img').attr('src');
                dots = dots+'<li><button data-slide="'+i+'" style="background-image:url(../'+imgLink+')"></button></li>';
                i++;

            });
        }
        if ($('.one-slide[data-slide=0]').length==0){
            var slide = $('.one-slide:last-child');
             $('.one-slide:last-child').remove();
             slide.attr('data-slide', 0 );
             $('.troll-slider').prepend(slide);
         }
        indexSlide();



        if($('#arrows').length==0){
            if (trollSlider.settings.arrows == true){
                slider.parent().append('<div id="arrows"><button id="prev-slide" class="prev-slide slider-arrows"></button><button id="next-slide" class="next-slide slider-arrows"></button></div>');
            }
        }
        if($('#dots').length==0){
            if (trollSlider.settings.dots == true){
                slider.parent().append('<ul id="dots">'+dots+'</ul>');
            }
        }
    }
}
function indexSlide(){
    var slider = $('.troll-slider');
    $('.one-slide').removeClass('second active-slide third unactive-slide');
    slider.find('.one-slide[data-slide=1]').addClass('active-slide');
    slider.find('.active-slide').next().addClass('second');
    slider.find('.second').next().addClass('third');
    $('.one-slide').each(function() {
        var i = $(this).attr('data-slide');
        if(i>trollSlider.settings.showItems || i<=0 ){$(this).addClass('unactive-slide');}
    });

}
function nextSlide(){
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
         indexSlide();
}
function prevSlide(){
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
         indexSlide();
}


$(document).ready(function(){
    trollSlider.init($('.troll-slider'));
    $('#next-slide').on('click', function(){
        nextSlide();
    });
    $('#prev-slide').on('click', function(){
        prevSlide();
    });
});

$(window).load(function(){

});

$(window).resize(function(){
     trollSlider.init($('.troll-slider'));
});