Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function labels(data, layer_calling) {
    i = 1;
    // console.log('layer_Calling', layer_calling);
    // debugger;
    if (layer_calling == 'district') {
        _test = data.target._layers;
        for (aht in _test) {
            var a = _test[aht]
            var district = L.polygon(a._latlngs);
            district_name = a.feature.properties.NAME_3; //label content
            var labelLocation = new L.LatLng(district.getBounds().getCenter().lat, district.getBounds().getCenter().lng);
            var labelTitle = new L.LabelOverlays(labelLocation, district_name);
            District_labels.addLayer(labelTitle);
        }
    } else if (layer_calling == 'vdc') {
        _test = data.target._layers;
        var size = Object.size(_test);
        // console.log(size);
        var a = Object.keys(_test);
        for (var i = 0; i < a.length - 1; i++) {
            var b = _test[a[i]];
            var vdc = L.polygon(b._latlngs);
            vdc_name = b.feature.properties.NAME_4;
            // console.log(vdc_name, i);
            var labelLocation = vdc.getBounds().getCenter();
            // var labelLocation = new L.LatLng(vdc.getBounds().getCenter().lat, vdc.getBounds().getCenter().lng);
            // debugger;
            var labelTitle = new L.LabelOverlays(labelLocation, vdc_name);
            VDC_labels.addLayer(labelTitle);
            // console.log(vdc_name, i);
        };
        /*
        for (ath in _test) {
            var b = _test[ath];
            var vdc = L.polygon(b._latlngs);
            // console.log(i);
            // i++
            vdc_name = b.feature.properties.NAME_4; //label content
            var labelLocation = new L.LatLng(vdc.getBounds().getCenter().lat, vdc.getBounds().getCenter().lng);
            var labelTitle = new L.LabelOverlays(labelLocation, vdc_name);
            VDC_labels.addLayer(labelTitle);
        }
        */
    }
}
//event on mapzoom
//hide or show the district_label on zoom level greater than 8

//check if in layercontrol the layer is enabled or not
// function check_zooms() {
//     console.log('......check_zooms called');
//     if (map.getZoom() <= 8) {
//         if (map.hasLayer(VDC_labels)) {
//             map.removeLayer(VDC_labels);
//         }
//         if (map.hasLayer(District_labels)) {
//             map.removeLayer(District_labels);
//             console.log('district_label removed');
//         }

//     } else if (map.getZoom() > 8 && map.getZoom() < 11) {
//         map.addLayer(District_labels);
//         map.removeLayer(VDC_labels);
//         //console.log('greater than 8');
//     } else if (map.getZoom() >= 11) {
//         map.addLayer(VDC_labels);
//         map.removeLayer(District_labels);
//     }
// }
function displayLabel(labelLayer, zoom, mainLayer, displayName) {
    // console.log('labelLayer, zoom, mainLayer ', labelLayer, map.getZoom(), mainLayer);

    if (!map.hasLayer(mainLayer)) {
        if (map.hasLayer(labelLayer)) {
            map.removeLayer(labelLayer);
            layersControlSettings.removeLayer(labelLayer);
            console.log("no main layer");
        }
    } else {
        if (map.getZoom() <= zoom) {
            if (map.hasLayer(labelLayer)) {
                map.removeLayer(labelLayer);
                layersControlSettings.removeLayer(labelLayer);
            }
        } else {
            if (map.hasLayer(mainLayer)) {
                if (!map.hasLayer(labelLayer)) {
                    map.addLayer(labelLayer);
                    if (displayName == "VDC") {
                        console.log("VDC Labels added");
                    }
                    layersControlSettings.addOverlay(labelLayer, displayName + " Labels", "Labels");
                }
            }
        }
    }
}

map.on('zoomend', function(e) {
    // console.log('e ', e);

    displayLabel(District_labels, 7, district_boundary, "District");

    displayLabel(VDC_labels, 11, vdc_boundary, "VDC");

});