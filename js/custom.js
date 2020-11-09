$(document).ready(function () {

  // common header 
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var logoHeight = $(".logo").outerHeight();
    if (scroll >= logoHeight) {
      $(".gnb").addClass("fixed");
    } else {
      $(".gnb").removeClass("fixed");
    }

  });

  // activate navigation

  $(".menuBtn").click(function () {
    var winWidth = $(window).width();

    if (winWidth < 730) {
      $(".gnb").animate({ left: '0%' }, 300);
    }
  });


  $(".close").click(function () {
    var winWidth = $(window).width();

    if (winWidth < 730) {
      $(".gnb").animate({ left: '-50%' }, 300);
    }
  });

  // main page review slide section
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  $('#slide > div:gt(0)').hide();

  setInterval(function () {
    $('#slide > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slide');
  }, 3000);


  new WOW().init();

  AOS.init();

  //scroll top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#backToTop').fadeIn(500);
    } else {
      $('#backToTop').fadeOut('slow');
    }
  });
  $('#backToTop').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 200);
  });

});
