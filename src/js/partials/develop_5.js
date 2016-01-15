var trollSlider = new Object();

trollSlider.settings = {
        showItems : 3,
        dots:true,
        arrows:true
    };

trollSlider.init = function(slider){
    var i = 1;
    var numItems = slider.children.length+1;
    var z = numItems * 10;
    var dots ='';

    if (!slider.children().attr('data-slide')){
        slider.children().each(function() {
            $(this).attr({ 'data-slide': i }).css('z-index', z);

            var imgLink= $(this).find('.image').find('img').attr('src');
            dots = dots+'<li><button data-slide="'+i+'" style="background-image:url(../'+imgLink+')"></button></li>';
            if(i>trollSlider.settings.showItems){$(this).addClass('unactive-slide');}
            i++;
            z--;
        });
    }
    var maxWidth =  parseFloat(100 / trollSlider.settings.showItems).toFixed(0);
    slider.children().css('max-width', maxWidth +'%' );
    slider.children().first().addClass('active-slide');
    slider.find('.active-slide').next().addClass('second');
    slider.find('.second').next().addClass('third');

    var slideWidth = slider.parent().width();
    slider.width(slideWidth);
    if($('#arrows').length==0){
        if (trollSlider.settings.arrows == true){
            slider.append('<div id="arrows"><button class="next-slide slider-arrows"></button><button class="prev-slide slider-arrows"></button></div>');
        }
    }
    if($('#dots').length==0){
        if (trollSlider.settings.dots == true){
            slider.append('<ul id="dots">'+dots+'</ul>');
        }
    }
}
$(document).ready(function(){
    trollSlider.init($('.troll-slider'));
});

$(window).load(function(){

});

$(window).resize(function(){
     trollSlider.init($('.troll-slider'));
});