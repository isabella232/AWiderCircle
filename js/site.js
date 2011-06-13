// map and interactivity behavior

$(document).ready(function() {

    var m = new OpenLayers.Map('ts-map', {
        layers: [
            new OpenLayers.Layer.TMS('world-light-dc', ['http://a.tiles.mapbox.com/dhcole/', 'http://b.tiles.mapbox.com/dhcole/', 'http://c.tiles.mapbox.com/dhcole/', 'http://d.tiles.mapbox.com/dhcole/'], {
                'projection': new OpenLayers.Projection('EPSG:900913'),
                'wrapDateLine': false,
                'type': 'png',
                'buffer': 0,
                'transitionEffect': null,
                'serverResolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348, 1.19432856674, 0.597164283371],
                'layername': 'world-light-dc',
                'isBaseLayer': true,
                'visibility': true,
                'maxExtent': new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
                'resolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348]
            }),
            new OpenLayers.Layer.TMS('World Light', ['http://a.tiles.mapbox.com/dhcole/', 'http://b.tiles.mapbox.com/dhcole/', 'http://c.tiles.mapbox.com/dhcole/', 'http://d.tiles.mapbox.com/dhcole/'], {
                'projection': new OpenLayers.Projection('EPSG:900913'),
                'wrapDateLine': false,
                'type': 'png',
                'buffer': 0,
                'transitionEffect': null,
                'serverResolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348, 1.19432856674, 0.597164283371],
                'layername': 'world-light',
                'isBaseLayer': false,
                'visibility': true,
                'maxExtent': new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
                'resolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715]
            }),
            new OpenLayers.Layer.TMS('world-light-usa', ['http://a.tiles.mapbox.com/dhcole/', 'http://b.tiles.mapbox.com/dhcole/', 'http://c.tiles.mapbox.com/dhcole/', 'http://d.tiles.mapbox.com/dhcole/'], {
                'projection': new OpenLayers.Projection('EPSG:900913'),
                'wrapDateLine': false,
                'type': 'png',
                'buffer': 0,
                'transitionEffect': null,
                'serverResolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348, 1.19432856674, 0.597164283371],
                'layername': 'awc-world-light-usa-11-12',
                'isBaseLayer': false,
                'visibility': true,
                'maxExtent': new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
                'resolutions': [76.4370282715, 38.2185141357]
            }),
            new OpenLayers.Layer.TMS('world-light-usa', ['http://a.tiles.mapbox.com/dhcole/', 'http://b.tiles.mapbox.com/dhcole/', 'http://c.tiles.mapbox.com/dhcole/', 'http://d.tiles.mapbox.com/dhcole/'], {
                'projection': new OpenLayers.Projection('EPSG:900913'),
                'wrapDateLine': false,
                'type': 'png',
                'buffer': 0,
                'transitionEffect': null,
                'serverResolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348, 1.19432856674, 0.597164283371],
                'layername': 'awc-world-light-usa-7-10',
                'isBaseLayer': false,
                'visibility': true,
                'maxExtent': new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
                'resolutions': [1222.99245234, 611.496226172, 305.748113086, 152.874056543]
            }),
            new OpenLayers.Layer.TMS('Wider_zips', ['http://a.tiles.mapbox.com/dhcole/', 'http://b.tiles.mapbox.com/dhcole/', 'http://c.tiles.mapbox.com/dhcole/', 'http://d.tiles.mapbox.com/dhcole/'], {
                'projection': new OpenLayers.Projection('EPSG:900913'),
                'wrapDateLine': false,
                'type': 'png',
                'buffer': 0,
                'transitionEffect': null,
                'serverResolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348, 1.19432856674, 0.597164283371],
                'layername': 'awc-zips-4',
                'isBaseLayer': false,
                'visibility': true,
                'maxExtent': new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
                'resolutions': [1222.99245234, 611.496226172, 305.748113086, 152.874056543]
            }),
            new OpenLayers.Layer.TMS('DC Bright', ['http://a.tiles.mapbox.com/dhcole/', 'http://b.tiles.mapbox.com/dhcole/', 'http://c.tiles.mapbox.com/dhcole/', 'http://d.tiles.mapbox.com/dhcole/'], {
                'projection': new OpenLayers.Projection('EPSG:900913'),
                'wrapDateLine': false,
                'type': 'png',
                'buffer': 0,
                'transitionEffect': null,
                'serverResolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348, 1.19432856674, 0.597164283371],
                'layername': 'dc-bright',
                'isBaseLayer': false,
                'visibility': true,
                'maxExtent': new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
                'resolutions': [76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348, 1.19432856674]
            }),
            new OpenLayers.Layer.TMS('Wider_addresses', ['http://a.tiles.mapbox.com/dhcole/', 'http://b.tiles.mapbox.com/dhcole/', 'http://c.tiles.mapbox.com/dhcole/', 'http://d.tiles.mapbox.com/dhcole/'], {
                'projection': new OpenLayers.Projection('EPSG:900913'),
                'wrapDateLine': false,
                'type': 'png',
                'buffer': 0,
                'transitionEffect': null,
                'serverResolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348, 1.19432856674, 0.597164283371],
                'layername': 'awc-addresses-rec-6',
                'isBaseLayer': false,
                'visibility': true,
                'maxExtent': new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
                'resolutions': [76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348]
            }),
            new OpenLayers.Layer.TMS('Wider_addresses', ['http://a.tiles.mapbox.com/dhcole/', 'http://b.tiles.mapbox.com/dhcole/', 'http://c.tiles.mapbox.com/dhcole/', 'http://d.tiles.mapbox.com/dhcole/'], {
                'projection': new OpenLayers.Projection('EPSG:900913'),
                'wrapDateLine': false,
                'type': 'png',
                'buffer': 0,
                'transitionEffect': null,
                'serverResolutions': [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.96980938, 2445.98490469, 1222.99245234, 611.496226172, 305.748113086, 152.874056543, 76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348, 1.19432856674, 0.597164283371],
                'layername': 'awc-addresses-don-6',
                'isBaseLayer': false,
                'visibility': true,
                'maxExtent': new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
                'resolutions': [76.4370282715, 38.2185141357, 19.1092570679, 9.55462853394, 4.77731426697, 2.38865713348]
            })
        ],
        units: 'm',
        maxResolution: 1.40625,
        theme: 'http://tiles.mapbox.com/dhcole/maps/ol/dark.css',
        maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
        projection: new OpenLayers.Projection('EPSG:900913'),
        displayProjection: new OpenLayers.Projection('EPSG:900913'),
        controls: [
            new OpenLayers.Control.Navigation({
                zoomWheelEnabled: false
            }),
            new wax.ol.Legend(),
            new OpenLayers.Control.ZoomPanel(),
            new wax.ol.Interaction()
        ]
    });

    m.setCenter((new OpenLayers.LonLat(-77.012937037187, 38.913793178492)).
        transform(
            new OpenLayers.Projection('EPSG:4326'),
            new OpenLayers.Projection('EPSG:900913')),
        14);

    // overlays follow cursor
    if (!$.browser.msie) {
        $(document).mousemove(function(e) {
            $('.wax-tooltip:not(.hidden)').each(function() {
                if ($(this).height() + 240 < e.pageY) {
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
        $('.olControlZoomPanel div').click(function() {
            $('.wax-tooltip').hide();
        });
    }
});
