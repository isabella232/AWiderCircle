// map and interactivity behavoir

$(document).ready(function() {		
	// overlays follow cursor
	if($.browser.msie) {
		$('.wax-tooltip').css('background: url(http://tiles.mapbox.com/images/mask75.png)');
	} else {
		$(document).mousemove(function(e){
		  $('.wax-tooltip:not(.hidden)').each(function() {
		  	if($(this).height() + 240 < e.pageY ) {
		      $(this).offset({
			      top: e.pageY - $(this).height() - 45,
			      left: e.pageX - 110
		      });
		    } else {
		    	$(this).addClass('flip');
		      $(this).offset({
			      top: e.pageY + 15,
			      left: e.pageX - 110
		      });
		    }
		  });
		  $('.olControlZoomPanel div').click(function() {
		  	$('.wax-tooltip').hide();
		  });
		}); 
	}
});
