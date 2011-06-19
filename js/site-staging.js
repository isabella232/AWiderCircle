// Dependencies:
// wax, modestmaps

var m,d,r;
var mm = com.modestmaps;

$(document).ready(function() {

	// Build the Map

	m = new mm.Map('map',
	  new wax.mm.provider({
	    baseUrl: ['http://a.tiles.mapbox.com/dhcole/',
	    					'http://b.tiles.mapbox.com/dhcole/',
	    					'http://c.tiles.mapbox.com/dhcole/',
	    					'http://d.tiles.mapbox.com/dhcole/'],
	    layerName: 'world-light-dc,world-light,dc-bright,awc-zips-4',
	    zoomRange: [0, 16]}),
	    null,
	  [
	  	new mm.DragHandler,
	  	new mm.DoubleClickHandler,
	    new mm.TouchHandler
	  ]);
	wax.mm.zoomer(m);
	wax.mm.zoombox(m);
	wax.mm.interaction(m);
	m.setCenterZoom(new mm.Location(38.913793178492,-77.012937037187), 14);
	m.addCallback("zoomed", function(modestmap, e) {
	  hideOutOfRange(m.getZoom());
  });
	m.addCallback("drawn", function(modestmap, e) {
	  r.setCenterZoom(m.getCenter(), m.getZoom());
	  d.setCenterZoom(m.getCenter(), m.getZoom());

  });
  	
  r = new mm.Map('map',
	  new wax.mm.provider({
	    baseUrl: ['http://a.tiles.mapbox.com/dhcole/',
	    					'http://b.tiles.mapbox.com/dhcole/',
	    					'http://c.tiles.mapbox.com/dhcole/',
	    					'http://d.tiles.mapbox.com/dhcole/'],
	    layerName: 'awc-addresses-rec-6',
	    zoomRange: [11, 16]}),
	    null,null);
	wax.mm.interaction(r);
	r.setCenterZoom(new mm.Location(38.913793178492,-77.012937037187), 14);

  d = new mm.Map('map',
	  new wax.mm.provider({
	    baseUrl: ['http://a.tiles.mapbox.com/dhcole/',
	    					'http://b.tiles.mapbox.com/dhcole/',
	    					'http://c.tiles.mapbox.com/dhcole/',
	    					'http://d.tiles.mapbox.com/dhcole/'],
	    layerName: 'awc-addresses-don-6',
	    zoomRange: [11, 16]}),
	    null,null);
	wax.mm.interaction(d);
	d.setCenterZoom(new mm.Location(38.913793178492,-77.012937037187), 14);


  // overlay behavoirs
  
  var overlays = '',
  		nOverlays = 1;
  		
  $('#map').mousemove(function(e) {
    $('.wax-tooltip:not(.hidden)').each(function() {

			// surpress duplicate overlays
			if($('.wax-tooltip').length > 1) { 
				nOverlays = parseInt($('.wax-tooltip').length) - 1;
			  overlays = '.wax-tooltip:lt('+nOverlays+')';
				$(overlays).remove();
			}		

			// follow cursor
      if ($(this).height() + 300 < e.pageY) {
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
  }); 
});

var hideOutOfRange = function(z) {

  //remove any residual overlays after zooming
  $('.wax-tooltip').remove();

  //hide layers that don't match this zoom extent
  if(z<11) {
	  r.setProvider(new wax.mm.provider({
	    baseUrl: '',
	    layerName: '',
	    filetype: '',
	    zoomRange: []}));
	  d.setProvider(new wax.mm.provider({
	    baseUrl: '',
	    layerName: '',
	    filetype: '',
	    zoomRange: []}));
  } else {
	  r.setProvider(new wax.mm.provider({
	    baseUrl: ['http://a.tiles.mapbox.com/dhcole/',
	    					'http://b.tiles.mapbox.com/dhcole/',
	    					'http://c.tiles.mapbox.com/dhcole/',
	    					'http://d.tiles.mapbox.com/dhcole/'],
	    layerName: 'awc-addresses-rec-6',
	    zoomRange: [11, 16]}));
	  d.setProvider(new wax.mm.provider({
	    baseUrl: ['http://a.tiles.mapbox.com/dhcole/',
	    					'http://b.tiles.mapbox.com/dhcole/',
	    					'http://c.tiles.mapbox.com/dhcole/',
	    					'http://d.tiles.mapbox.com/dhcole/'],
	    layerName: 'awc-addresses-don-6',
	    zoomRange: [11, 16]}));
  }
};