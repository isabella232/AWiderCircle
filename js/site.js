// Dependencies:
// wax, modestmaps, data

var worldLight, dcBright, addDonor, zipAll; // make the map and overlay global

var makeMaps = function() {
  var mm = com.modestmaps;

  worldLight = new mm.Map('map-base',
      new com.modestmaps.WaxProvider({
        baseUrl: 'http://a.tiles.mapbox.com/mapbox/',
        layerName: 'world-light',
        zoomRange: [0, 16]}))
        .zoomer();
  worldLight.setCenterZoom(
    new com.modestmaps.Location(38.907782348938, -77.009890062083),
    13);
    
  dcBright = new mm.Map('map-add',
      new com.modestmaps.WaxProvider({
        baseUrl: 'http://a.tiles.mapbox.com/mapbox/',
        layerName: 'dc-bright',
        zoomRange: [11, 16]}));
  dcBright.setCenterZoom(
    new com.modestmaps.Location(38.907782348938, -77.009890062083),
    13);
    
  addAll = new mm.Map('map-add',
      new com.modestmaps.WaxProvider({
        baseUrl: 'http://a.tiles.mapbox.com/dhcole/',
        layerName: 'awc-addresses-don',
        zoomRange: [11, 16]}))
    		.interaction();
  addAll.setCenterZoom(
    new com.modestmaps.Location(38.907782348938, -77.009890062083),
    13);
 
  zipAll = new mm.Map('map-zip',
      new com.modestmaps.WaxProvider({
        baseUrl: 'http://a.tiles.mapbox.com/dhcole/',
        layerName: 'awc-zips',
        zoomRange: [7, 10]}))
        .interaction();
  zipAll.setCenterZoom(
    new com.modestmaps.Location(38.907782348938, -77.009890062083),
    13);
    
  worldLight.addCallback("drawn", function(modestmap, e) {
     	if (worldLight.getZoom() >= 7 && worldLight.getZoom() <= 10) {
     		zipAll.setCenterZoom(worldLight.getCenter(), worldLight.getZoom());
     	} else {
     		
     	}
      if (worldLight.getZoom() >= 11 && worldLight.getZoom() <= 16) {
     		addAll.setCenterZoom(worldLight.getCenter(), worldLight.getZoom());
     		dcBright.setCenterZoom(worldLight.getCenter(), worldLight.getZoom());
     	} else {
     		
     	}	   
  });
};

$(function() {
  makeMaps();
  
  $('div#map-base').bind('addedtooltip', function(e, tooltip, context, evt) {
      var $tooltip = $(tooltip);
      var $mapdiv = $('div#map-base');
      // Position far outside of the page in order for it to get
      // a height
      $tooltip.offset({
          top: -10000
      });
      $tooltip.bind('selectstart', function(e) {
        e.stopPropagation();
      });
      $tooltip.append('<div class="arrowsprite">&nbsp;</div>');
      // Add it to the page
      $('body').append($tooltip);
      // Reposition correctly the first time
      $tooltip.offset({
          top: evt.pageY - $tooltip.outerHeight(true) - 10,
          left: evt.pageX - ($tooltip.outerWidth(true) / 2),
          'z-index': 99999999
      });
      // continue to follow the mouse.
      return true;
  });

});
