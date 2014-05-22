// define styles
function style_polygon() {
    return {
        fillColor: '#C8C582',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function style_htc(marker) {
    // Creates a red marker with the coffee icon
    var redMarker = L.AwesomeMarkers.icon({
        icon: 'coffee',
        markerColor: 'red'
    });
    return marker.setIcon(redMarker)
    // body...
}

// arrange styles to groups
district_boundary_styles = {
    "default": style_polygon
}

vdc_boundary_styles = {
    "default": style_polygon
}

HTC_sites_styles = {
    "default": style_htc
}
/*
Styles will be used to generate the UI, define styles separately
 */
styles = {
    "district_boundary_styles": {
        "geometry": "polygon",
        "styles": district_boundary_styles,
        "layer": district_boundary,
        "display": "District"
    },
    "vdc_boundary_styles": {
        "geometry": "polygon",
        "styles": vdc_boundary_styles,
        "layer": vdc_boundary,
        "display": "VDC"
    },
    "HTC_sites_styles": {
        "geometry": "point",
        "styles": HTC_sites_styles,
        "layer": HTC_sites,
        "display": "HTC Sites"
    }
}