// define styles
function style_district_polygon() {
    return {
        fillColor: '#94F0F8',
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.8
    };
}

function style_district_unique() {
    return {
        fillColor: randomColor(),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.8
    };
}

function style_vdc_polygon() {
    return {
        fillColor: '#C8C582',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.4
    };
}

function style_vdc_unique() {
    return {
        fillColor: randomColor(),
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.4
    };
}

//include popup also
function style_htc_suppoerted_by(marker) {
    // Creates a red marker with the coffee icon
    console.log('red markers');
    console.log(marker);
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

function style_htc_no_of_cases(marker) {
    // debugger;
    var iconSize = marker.feature.properties["no_of_case"] / 10;
    var icon = L.divIcon({
        html: marker.feature.properties["no_of_case"],
        className: "no-cases-icon",
        iconSize: [iconSize, iconSize]
    })
    return marker.setIcon(icon)
}

function style_htc_default(marker) {
    var HTC_icon = L.icon({
        iconUrl: 'img/marker22.png',
        iconSize: [20, 30], // size of the icon
        // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
    });
    return marker.setIcon(HTC_icon)
}

// arrange styles to groups
district_boundary_styles = {
    "Default": {
        "style": style_district_unique,
        "legend": ""
    }
}
vdc_boundary_styles = {
    "Default": {
        "style": style_vdc_unique,
        "legend": ""
    }
}

HTC_sites_styles = {
    "Default": {
        "style": style_htc_default,
        "legend": "<img src = 'img/marker22.png'>HTC Sites"
    },
    "Supported By": {
        "style": style_htc_suppoerted_by,
        "legend": "This is HTC Sites Marker Legend"
    },
    "No of Case": {
        "style": style_htc_no_of_cases,
        "legend": "Replace this with no_of_cases Legend"
    }
}