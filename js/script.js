;(function($){

	$(document).ready(function(){

		var $grid;

		$grid = $('.ba-portfolio__items').isotope({
        itemSelector: '.ba-portfolio__item',
        percentPosition: true,
        masonry: {
        columnWidth: '.ba-grid-sizer',
        layoutMode: 'fitRows'
        }
      });

		$('.ba-portfolio__filter-item').on('click', function(evt){
			evt.preventDefault();

			$('.ba-portfolio__filter-item').removeClass('active');
			$(this).addClass('active');


			var filterVal = $(this).attr('data-filter');
			$grid.isotope({ filter: filterVal });
		});

		$('.ba-slider-1').slick({

		dots: true
		});

		$('.ba-slider-2').slick({'autoplay': true, 
	  	'speed' : 4000, 
	  	'dots' : true,
	  	'arrow' : false
 
  });
	});

	$(window).on('load', function(){
  var map;

  map = new google.maps.Map(
   document.getElementById('ba-map'), {
            center: {lat: 49.5685276, lng: 34.58543170000007},
            zoom: 16,
            disableDefaultUI: true
         });

  var markerPoltava = new google.maps.Marker({
          position: {lat: 49.5685276, lng: 34.58543170000007},
          map: map,
          icon: 'img/map-marker.png'
        });
 });

})(jQuery);