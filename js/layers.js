var map = L.map('map').setView([28.425, 84.435], 7);

var north_east = new L.latLng(26.328231, 80.029907);
var south_west = new L.latLng(30.605155, 88.225708);
var bounds = new L.latLngBounds(north_east, south_west);
var nep_latlng_array = [];

//get coordinates from geojson
var testGeom = testGeom || [];

for (any in testGeom) {
    a = testGeom[any];
    for (bny in a) {
        b = L.latLng(a[bny])
        nep_latlng_array.push(b);
    }
}

osmUrl = 'https://a.tiles.mapbox.com/v3/poshan.i65ff4hn/{z}/{x}/{y}.png',
osmAttribution = 'Map data &copy; 2012 OpenStreetMap contributors';
var osm = L.TileLayer.boundaryCanvas(osmUrl, {
    boundary: nep_latlng_array
}).addTo(map);

var country_boundary = new L.geoJson();
// country_boundary.addTo(map);

var zone_boundary = new L.geoJson();
// zone_boundary.addTo(map);

var district_boundary = new L.geoJson();
district_boundary.addTo(map);

var vdc_boundary = new L.geoJson();
// vdc_boundary.addTo(map);

var HTC_sites = new L.geoJson();
HTC_sites.addTo(map);

var baseLayers = {};
var overlays = {
    "OpenStreetMap": osm,
    "District": district_boundary,
    "VDC": vdc_boundary,
    "HTC Sites": HTC_sites
};
layersControlSettings = L.control.layers(baseLayers, overlays, {
    collapsed: false
});
layersControlSettings.addTo(map);
$('#layersControl').append(layersControlSettings.onAdd(map));
$('.leaflet-top.leaflet-right').hide(); // temporary solution for hiding layers control

//htc_dummy data
map.spin(true);
$.ajax({
    dataType: "json",
    url: "data/htc_dummy.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            // L.geoJson(data).addTo(map);
            HTC_sites.addData(data);
            // HTC_sites.setStyle(style['supported']);
            //HTC_sites.bindPopup(data.properties['Name of Se']);
            //data.geometry.coordinates
            //data.properties['Name of Se'] is name of htc site
            //data.properties.no_of_case is no of cases
            //data.properties.ia  is implementing agency
            map.spin(false);
        });

    }
}).error(function() {
    map.spin(false);
});

//district data
$.ajax({
    dataType: "json",
    url: "data/district.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            district_boundary.addData(data);

        });


    }
});

$.ajax({
    dataType: "json",
    url: "data/zone.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            zone_boundary.addData(data);

        });

    }
});

map.spin(true);
$.ajax({
    dataType: "json",
    url: "data/vdc.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            vdc_boundary.addData(data);
            map.spin(false);
        });

    }
}).error(function() {
    map.spin(false);
});;

$.ajax({
    dataType: "json",
    url: "data/country.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            country_boundary.addData(data);

        });

    }
});