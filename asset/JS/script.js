$(document).ready(function() {
    var owl = $('.owl-carousel');
        owl.owlCarousel({
          padding: 10,
          loop: true,
          responsive: {
            0: {
              items: 1
               },
          600: {
              items: 3
                },
        1000: {
              items: 8
              }
          }
        })
      })