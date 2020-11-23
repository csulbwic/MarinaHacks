(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

})(jQuery);

particlesJS("back-bubbles", {
  "particles": {
      "number": {
          "value": 40,
          "density": {
              "enable": !0,
              "value_area": 4000
          }
      },
      "color": {
          "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#fff"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 33,
              "height": 33
          }
      },
      "opacity": {
          "value": 0.15,
          "random": !0,
          "anim": {
              "enable": !0,
              "speed": 0.2,
              "opacity_min": 0.15,
              "sync": !1
          }
      },
      "size": {
          "value": 50,
          "random": !0,
          "anim": {
              "enable": !0,
              "speed": 2,
              "size_min": 5,
              "sync": !1
          }
      },
      "line_linked": {
          "enable": !1,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": !0,
          "speed": 1,
          "direction": "top",
          "random": !0,
          "straight": !1,
          "out_mode": "out",
          "bounce": !1,
          "attract": {
              "enable": !1,
              "rotateX": 600,
              "rotateY": 600
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": !1,
              "mode": "bubble"
          },
          "onclick": {
              "enable": !1,
              "mode": "repulse"
          },
          "resize": !0
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1,
              }
          },
          "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
          },
          "repulse": {
              "distance": 400,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": !0
});

particlesJS("front-bubbles", {
  "particles": {
      "number": {
          "value": 40,
          "density": {
              "enable": !0,
              "value_area": 4000
          }
      },
      "color": {
          "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#fff"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 33,
              "height": 33
          }
      },
      "opacity": {
          "value": 0.15,
          "random": !0,
          "anim": {
              "enable": !0,
              "speed": 0.2,
              "opacity_min": 0.15,
              "sync": !1
          }
      },
      "size": {
          "value": 50,
          "random": !0,
          "anim": {
              "enable": !0,
              "speed": 2,
              "size_min": 5,
              "sync": !1
          }
      },
      "line_linked": {
          "enable": !1,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": !0,
          "speed": 1,
          "direction": "top",
          "random": !0,
          "straight": !1,
          "out_mode": "out",
          "bounce": !1,
          "attract": {
              "enable": !1,
              "rotateX": 600,
              "rotateY": 600
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": !1,
              "mode": "bubble"
          },
          "onclick": {
              "enable": !1,
              "mode": "repulse"
          },
          "resize": !0
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1,
              }
          },
          "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
          },
          "repulse": {
              "distance": 400,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": !0
});

// Sponors Section //
var __sf = $(".sponsorsFooter ul span");
var __sf_cont = $(".sponsorsFooter ul");
var __title = $("#sponsorTitle");

__sf.mouseenter(function() {
  $(this).addClass('hover');
  __sf_cont.addClass('enter');
  var __setTitle = $(this).attr("data-group-title");
  __title.html(__setTitle);
}).mouseleave(function() {
  $(this).removeClass('hover');
  __sf_cont.removeClass('enter');
  var __setTitle = $(__title).attr("data-default-title");
  __title.html(__setTitle);
});
// End of Sponsors Section //
