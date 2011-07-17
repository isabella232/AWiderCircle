var m,d,r,touchPosition,
    mm = com.modestmaps;
    url = 'http://a.staging.mapbox.com/awidercircle/1.0.0/'
      +'mapbox.world-light,awc-world-light-dc,mapbox.dc-bright,awc-addresses-rec,awc-addresses-don,awc-zips'
      +'/layer.json';

function is_touch_device() {  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    return false;  
  }  
}

$(document).ready(function() {   
  if (!is_touch_device()) {
    $('body').addClass('desktop');
  }

  wax.tilejson(url, function(tilejson) {
    m = new mm.Map('map',
      new wax.mm.connector(tilejson),
      null,
      [
        new mm.DragHandler,
        new mm.DoubleClickHandler,
        new mm.TouchHandler
      ]);
    wax.mm.zoomer(m, tilejson).appendTo(m.parent);
    wax.mm.zoombox(m, tilejson);
        wax.mm.interaction(m, tilejson);
    m.setCenterZoom(new mm.Location(38.913793178492,-77.012937037187), 14);
  });
  
  // overlay behavoirs 
  $('#map').mousemove(function(e) {
    $('.wax-tooltip:not(.hidden)').each(function() { 
      $(this).css('display', 'block');      

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