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
    var HTC_icon = L.icon({
        iconUrl: 'img/htc.png',
        iconSize: [28, 25], // size of the icon
        // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    return marker.setIcon(HTC_icon)
}

// arrange styles to groups
district_boundary_styles = {
    "Default": {
        "style": style_polygon,
        "legend": "This is District Boundry Default Legend"
    }
}
vdc_boundary_styles = {
    "Default": {
        "style": style_polygon,
        "legend": "This is VDC Boundry Default Legend"
    }
}

HTC_sites_styles = {
    "Default": {
        "style": style_htc_default,
        "legend": "This is HTC Sites Default Legend"
    },
    "Marker": {
        "style": style_htc,
        "legend": "This is HTC Sites Marker Legend"
    }
}