/************* Main Js File ************************
    Template Name: Novota- Personal Portfolio Template
    Author: Tanmoy Dhar
    Version: 1.0
    Copyright 2018
****************************************/


/*==================================

        Table of Content

        1. Window Load Function
            a. Preloader Setup
            b. Portfolio Isotope Setup
        2. Document Ready Function
            a. ScrollIt Setup
            b. Navbar Scrolling Background
            c. Stats Counter Setup
            d. Navbar Close On Click Mobile Responsive
            e. Stellar Setup
            f. Magnific Popup Setup
            g. Blog OwlCarousel Setup
            h. Testimonial OwlCarousel Setup
            i. Contact Form Setup

==================================*/

    /*========Window Load Function========*/
    $(window).on("load", function() {
        "use strict";
    /*========Preloader========*/


    // var wind = $(window);

    /*========ScrollIt Setup========*/
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -15 // offste (in px) for fixed top navigation
    });

    /*========Navbar Scrolling Background========*/
        var wind = $(window);
    wind.on("scroll", function() {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar")
        if (bodyScroll > 300) {
            navbar.addClass("fixed-top");
        } else {
            navbar.removeClass("fixed-top");
        }
    });

      $("#testimonial-slider").owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: true,
      singleItem: true,
      dots: true,
      loop: true,
      responsive:{
        0:{
          items:1
        },
        767:{
          items:1
        },
        1000:{
          items:2
        }
      }
    });
            $("#client-caro").owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: true,
      singleItem: true,
      loop: true,
      responsive:{
        0:{
          items:2
        },
        680:{
          items:4
        },
        1000:{
          items:6
        }
      }
    });
$("#twitter-slider").owlCarousel({
      navigation: true,
      pagination: true,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: true,
      singleItem: true,
      loop: true,
      responsive:{
        0:{
          items:1
        },
        680:{
          items:1
        },
        1000:{
          items:1
        }
      }
    });
      /* ------------------  MAGNIFIC POPUP VIDEO ------------------ */

    $('.popup-video').magnificPopup({
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });
        // welcome banner slider js
    $(".header-slides").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        items: 1,
        nav: !1,
        dots: !0,
        autoplay: !0,
        margin: 20,
        animateOut: "bounceOutRight",
        animateIn: "bounceInLeft"
    });
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items:1,
      nav:false,
      loop:true,
      dots:true,
      autoplay:true
 
  });
    $(".features-carousel").owlCarousel({
        loop: true,
    margin:20,
        nav: true,
        navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ], 
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    /*========Navbar Close On Click Mobile Responsive========*/
    $(".nav-item .nav-link").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

});


function thmbxSlider() {

    if ($('.app-slider-wrapper .slider').length) {
        $('.app-slider-wrapper .slider').bxSlider({
            // adaptiveHeight: true,
            auto:false,
            controls: false,
            pause: 3000,
            speed: 500,
            pagerCustom: '#app-slider-pager'
        });
    }

    if ($('.testimonials-slider .slider').length) {
        $('.testimonials-slider .slider').bxSlider({
            // adaptiveHeight: true,
            auto:false,            
            controls: true,
            nextText: '<i class="fas fa-long-arrow-alt-right"></i>',
            prevText: '<i class="fas fa-long-arrow-alt-left"></i>',
            mode: 'fade',
            pause: 3000,
            speed: 500,
            pager: true,
            pagerCustom: '#testimonials-slider-pager'
        });
    }

}


function appScreenshotCarousel () {
    if ($('.app-section-slider').length) {

        var swiper = new Swiper('.app-section-slider', {
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 4,
            initialSlide: 4,
            keyboardControl: true,
            mousewheelControl: false,
            lazyLoading: true,
            preventClicks: false,
            preventClicksPropagation: false,
            lazyLoadingInPrevNext: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: .5,
                slideShadows: false,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                575: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                }
            }
        });

    }
}

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        thmbxSlider();
       appScreenshotCarousel();

    })(jQuery);
});
    /*========Stats Counter Setup========*/
    (function(){
        if($("section.counter-area").length > 0) {
            var a = 0;
            $(window).on('scroll', function() {
                var oTop = $('section.counter-area').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('section.counter-area .counter-item .counter').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }
                        });
                    });
                    a = 1;
                }
            });
        }

    })();

    $(window).ready(function() {
        $('#preload').delay(200).fadeOut('fade');
    });