function labels() {
    //function createlabels(feature, layre) {
    _test = district_boundary._layers;
    for (var aht in _test) {
        var b = _test[aht];
        var district = L.polygon(b._latlngs);
        district_name = b.feature.properties.NAME_3; //label content
        var labelLocation = new L.LatLng(district.getBounds().getCenter().lat, district.getBounds().getCenter().lng);
        var labelTitle = new L.LabelOverlay(labelLocation, district_name);
        District_labels.addLayer(labelTitle);
    }
}

//event on mapzoom
map.on('zoomend', function(e) {
    if (map._zoom > 8) {
        map.addLayer(District_labels);
        console.log('greater than 8');
    } else {
        map.removeLayer(District_labels);
    }
    //console.log('the zoom level is ', map._zoom);
});