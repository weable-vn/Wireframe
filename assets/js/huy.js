 /*
                                                                  |--------------------------------------------------------------------------
                                                                  | Custom JS
                                                                  |--------------------------------------------------------------------------
                                                                  |
                                                                  | About author: https://Sticky.vn/
                                                                  |
                                                                  */

 /* ------------------------------------------------------------------------ *  
     Sticky header when scroll
 * ------------------------------------------------------------------------ */
 // jQuery(document).ready(function () {
 //   $(window).scroll(function(){
 //     var scroll = $(window).scrollTop();
 //     if (scroll > 62) {
 //       $(".header").addClass("sticky");
 //     }
 //     else {
 //       $(".header").removeClass("sticky");
 //     }
 //   });
 // });

 /* ------------------------------------------------------------------------ *  
     jQuery inview
 * ------------------------------------------------------------------------ */
 // ('div').on('inview', function(event, isInView) {
 //   if (isInView) {
 //   } else {
 //   }
 // });



 $(document).ready(function() {


     $('.list-event').slick({
         dots: false,
         infinite: false,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [{
                 breakpoint: 991,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             }
             // You can unslick at a given breakpoint now by adding:
             // settings: "unslick"
             // instead of a settings object
         ]
     });



     //  slider-view
     $('.view-more-media .bg-view .slider-for').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.view-more-media .bg-view .slider-nav'
     });
     $('.view-more-media .bg-view .slider-nav').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         asNavFor: '.view-more-media .bg-view .slider-for',
         dots: true,
         centerMode: true,
         focusOnSelect: true,
         centerPadding: '0px',
         infinite: true,
     });


     $('.view-more-media .bg-view .slider-nav .img-bg').click(function() {
         $('.view-more-media .bg-view .slider-for .img-houre img').addClass('show')
     });





 })