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
        icon: 'header',
        markerColor: 'red'
    });
    if (marker.feature.properties["Supported"] == "FHI 360") {
        return marker.setIcon(redMarker)
    } else {
        return marker.setIcon(new L.Icon.Default())
    }
}

function style_htc_default(marker) {
    return marker.setIcon(new L.Icon.Default())
}

// arrange styles to groups
district_boundary_styles = {
    "Default": style_polygon
}
vdc_boundary_styles = {
    "Default": style_polygon
}

HTC_sites_styles = {
    "Default": style_htc_default,
    "Marker": style_htc
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