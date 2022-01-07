jQuery(document).ready(function() {
    var slideWrapper = $(".hero-module__slider");

    // When the slide is changing
    function playPauseVideo(slick, control){
        var currentSlide, slideType, video, videoCurrent;

        currentSlide = slick.find(".slick-current");
        slideType = currentSlide.attr("class").split(" ")[1];

        if (slideType === "video") {
            video = currentSlide.children("video").get(0);
            videoCurrent = currentSlide.children("video");
            if (video != null) {
                if (control === "play"){
                    video.play();
                    videoCurrent.prop('muted', false);
                } else {
                    video.pause();
                    videoCurrent.prop('muted', true);
                }
            }
        }
    }

    $(function() {

        slideWrapper.on("init", function(slick){
            slick = $(slick.currentTarget);
            setTimeout(function(){
                playPauseVideo(slick,"play");
            }, 1000);
            // $(".slick-active video")[0].play();
        });

        slideWrapper.on("beforeChange", function(event, slick) {
            slick = $(slick.$slider);
            playPauseVideo(slick, "pause");
        });
        
        slideWrapper.on("afterChange", function(event, slick) {
            slick = $(slick.$slider);
            playPauseVideo(slick, "play");
        });


        slideWrapper.not(".slick-initialized").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            // autoplay: true,
            // autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            // lazyLoad:"progressive",
        });
    });
})



