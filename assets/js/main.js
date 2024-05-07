$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav: true,
    responsive: {
      0: {
        items: 1.2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
  })