// map and interactivity behavoir

$(document).ready(function() {
			
	// overlays follow cursor
	$(document).mousemove(function(e){
		$('.wax-tooltip').offset({top: e.pageY - $('.wax-tooltip').height() - 45, left: e.pageX - 110});
	}); 
});
