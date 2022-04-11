$(function () {
    $('.nav_ul ul').hide();
    $('#nav').hover(function () {
      $('.nav_ul ul').stop().slideDown(500)
    }, function () {
      $('.nav_ul ul').stop().slideUp(500)
    })//nav

    $('#slide').slick({
      autoplay: true,
      autospeed: 3000,
      arrows: false,
      dots: true
    });//slide

    $('#phone .center').slick({
      slidesToShow: 5,
      arrows: true
    })//center

    $('#youtube .youtube').slick({
      slidesToShow: 4,
    })//youtube

    $('#footer_top .logomoa').slick({
      autoplay: true,
      autospeed: 2000,
      slidesToShow: 5,
      arrows: true
    })//footer_top

  })// ready