'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});

// $("#md-popup").fancybox().trigger('click');

new WOW().init();

// $('.owl-carousel').owlCarousel({
//   center:true,
//     loop:true,
//     margin:10,
//     responsive:{
//         0:{
//             items: 2
//         },
//         600:{
//             items: 2
//         },
//         1000:{
//             items: 2
//         }
//     }
// })
var owl = $('.owl-carousel');

owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

owl.owlCarousel({
  center: true,
  loop: true,
  items: 2,
});

$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 500;  // in ms
  owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});
