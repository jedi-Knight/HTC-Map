function labels(data, layer_calling) {
    _test = data.target._layers;
    if (layer_calling == district_boundary) {
        for (aht in _test) {
            var b = _test[aht]
            var district = L.polygon(b._latlngs);
            district_name = b.feature.properties.NAME_3; //label content
            var labelLocation = new L.LatLng(district.getBounds().getCenter().lat, district.getBounds().getCenter().lng);
            var labelTitle = new L.LabelOverlays(labelLocation, district_name);
            District_labels.addLayer(labelTitle);
        }
    } else if (layer_calling == vdc_boundary) {
        for (aht in _test) {
            var b = _test[aht]
            var vdc = L.polygon(b._latlngs);
            vdc_name = b.feature.properties.NAME_4; //label content
            var labelLocation = new L.LatLng(vdc.getBounds().getCenter().lat, vdc.getBounds().getCenter().lng);
            var labelTitle = new L.LabelOverlays(labelLocation, vdc_name);
            VDC_labels.addLayer(labelTitle);
        }
    }
}
//event on mapzoom
//hide or show the district_label on zoom level greater than 8

//check if in layercontrol the layer is enabled or not

map.on('zoomend', function(e) {
    console.log(map.getZoom());
    if (map.getZoom() <= 8) {
        map.removeLayer(VDC_labels);
        if (map.hasLayer(District_labels)) {
            map.removeLayer(District_labels);
            console.log('district_label removed');
        }

    } else if (map.getZoom() > 8 && map.getZoom() < 11) {
        map.addLayer(District_labels);
        map.removeLayer(VDC_labels);
        //console.log('greater than 8');
    } else if (map.getZoom() >= 11) {
        map.addLayer(VDC_labels);
        map.removeLayer(District_labels);
    }
    //console.log('the zoom level is ', map._zoom);
});
