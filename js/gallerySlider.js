
// config
let width = 1170;
let animationSpeed = 1000;
let currentSlide = 1;
// catch element with dom 
let $slides = $('.slides');
let $slide = $('.slider .slides').find('.slide')
let $btnLeft = $('#left');
let $btnRight = $('#right')
// move left 
$btnLeft.on('click',()=>{
    $btnRight.removeClass('disable')
    $slides.animate({'margin-left':'-='+width},animationSpeed,function(){
        currentSlide++;
        if(currentSlide === $slide.length){
            $btnLeft.addClass('disable')
        }
    })
    if(currentSlide === $slide.length){
        $slides.stop()
    }
})
// move right
$btnRight.on('click',()=>{
    $slides.animate({'margin-left':'+='+width},animationSpeed,function(){
        currentSlide--;
        if (currentSlide === $slide.length - 1){
            $btnLeft.removeClass('disable');
        }
        else if(currentSlide === 1){
            $btnRight.addClass('disable');
        }
    })
    if(currentSlide === 1){
        $slides.stop();
    }
})

