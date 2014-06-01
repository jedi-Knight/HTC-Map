function labels(data, layer_calling) {
    _test = data.target._layers;
    //make seperate works  for the vdc and district because they have difrent 
    //places coordinates stored and the names 
    console.log(_test);
    for (aht in _test) {
        var b = _test[aht]
        var district = L.polygon(b._latlngs);
        district_name = b.feature.properties.NAME_3; //label content

        var labelLocation = new L.LatLng(district.getBounds().getCenter().lat, district.getBounds().getCenter().lng);
        var labelTitle = new L.LabelOverlays(labelLocation, district_name);
        if (layer_calling == district_boundary) {
            District_labels.addLayer(labelTitle);
        } else if (layer_calling == vdc_boundary) {
            VDC_labels.addLayer(labelTitle);
        }

    }
}
//event on mapzoom
//hide or show the district_label on zoom level greater than 8
map.on('zoomend', function(e) {
    if (map._zoom < 8) {
        map.removeLayer(VDC_labels);
    } else if (map._zoom > 8 && map._zoom < 13) {
        map.addLayer(District_labels);
        console.log('greater than 8');
    } else if (map._zoom >= 13) {
        map.addLayer(VDC_labels);
        map.removeLayer(District_labels);
    }
    //console.log('the zoom level is ', map._zoom);
});