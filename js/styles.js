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

function district_highlight_style() {
    return {
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    };
}

function each_district_reset_Style() {
    return {
        // fillColor: randomColor(),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        // fillOpacity: 0.8
    };
}

function style_district_unique(oneDistrict) {
    // console.log('oneDistrict ', oneDistrict);
    return {
        fillColor: district_colors[oneDistrict.properties.NAME_3],
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.8
    };
}

function style_vdc_polygon(oneVdc) {
    return {
        fillColor: '#C8C582',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.4
    };
}

function style_vdc_unique(oneVdc) {
    // console.log('oneVdc ', oneVdc);
    return {
        fillColor: district_colors[oneVdc.properties.NAME_3],
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.4
    };
}

// style_htc_supported_by
var iconSize = [20, 30],
    popupAnchor = [0, 0];
var icon = new L.Icon({
    iconSize: iconSize,
    popupAnchor: popupAnchor
});
var icons = {
    "FHI 360": new L.Icon({
        iconUrl: 'img/newmarkers/s.png',
        iconSize: iconSize,
        popupAnchor: popupAnchor
    }),
    "FPAN/GF": new L.Icon({
        iconUrl: 'img/newmarkers/f.png',
        iconSize: iconSize,
        popupAnchor: popupAnchor
    }),
    "Gov/Pool Fund": new L.Icon({
        iconUrl: 'img/newmarkers/p.png',
        iconSize: iconSize,
        popupAnchor: popupAnchor
    }),
    "IPPF": new L.Icon({
        iconUrl: 'img/newmarkers/i.png',
        iconSize: iconSize,
        popupAnchor: popupAnchor
    }),
    "Others": new L.Icon({
        iconUrl: 'img/newmarkers/o.png',
        iconSize: iconSize,
        popupAnchor: popupAnchor
    }),
    "STC": new L.Icon({
        iconUrl: 'img/newmarkers/c.png',
        iconSize: iconSize,
        popupAnchor: popupAnchor
    }),
    "Gov": new L.Icon({
        iconUrl: 'img/newmarkers/g.png',
        iconSize: iconSize,
        popupAnchor: popupAnchor
    })
};

function iconToLegendString() {
    var legendHTML = "";
    for (icon in icons) {
        // console.log('icon', icons[icon]);
        legendHTML += "<div><img src ='" + icons[icon].options.iconUrl + "' style = 'height:40'>" + icon + "</div></br>";
    }
    return legendHTML;
}

function style_htc_supported_by(marker) {
    if (icons[marker.feature.properties["Supported By"]]) {
        return marker.setIcon(icons[marker.feature.properties["Supported By"]])
    } else {
        return marker.setIcon(new L.Icon.Default({
            iconSize: [30, 35]
        }))
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

function style_art_default(marker) {
    var art_icon = L.icon({
        iconUrl: 'img/newmarkers/artmarker.png',
        iconSize: [25, 35]
    });
    return marker.setIcon(art_icon)
}

function style_cd4_default(marker) {
    var cd4_icon = L.icon({
        iconUrl: 'img/newmarkers/cd4marker.png',
        iconSize: [25, 35]
    });
    return marker.setIcon(cd4_icon)
}

function style_pmtct_default(marker) {
    var pmtct_icon = L.icon({
        iconUrl: 'img/newmarkers/cd4marker.png', //use the pmtct marker instead
        iconSize: [25, 35]
    });
    return marker.setIcon(pmtct_icon)
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
        "legend": "<div><img src = 'img/marker22.png' style = 'height:40'>HTC Sites</div>"
    },
    "Supported By": {
        "style": style_htc_supported_by,
        "legend": iconToLegendString()
    }
}
art_sites_styles = {
    "Default": {
        "style": style_art_default,
        "legend": "<div><img src = 'img/newmarkers/artmarker.png' style = 'height:40'>ART Sites</div>"
    }
}
cd4_sites_styles = {
    "Default": {
        "style": style_cd4_default,
        "legend": "<div><img src = 'img/newmarkers/cd4marker.png' style = 'height:40'>CD4 Sites</div>"
    }
}

//use the pmtct icon instead of cd4marker.png
pmtct_sites_styles = {
    "Default": {
        "style": style_pmtct_default,
        "legend": "<div><img src = 'img/newmarkers/cd4marker.png' style = 'height:40'>PMTCT Sites</div>"
    }
}