// map and interactivity behavoir
$(function() {
			
	// overlays follow cursor
	$(document).mousemove(function(e){
		$('.wax-tooltip').offset({top: e.pageY - $('.wax-tooltip').height() - 55, left: e.pageX - 110});
	}); 
});
