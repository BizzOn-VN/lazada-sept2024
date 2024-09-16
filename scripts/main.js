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

$('.owl-carousel').owlCarousel({
  center:true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items: 2
        },
        600:{
            items: 2
        },
        1000:{
            items: 2
        }
    }
})