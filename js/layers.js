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
    boundary: nep_latlng_array,
    attribution: osmAttribution,
    doubleClickZoom: true
}).addTo(map);

//for the labels
var District_labels = new L.layerGroup();
District_labels.addTo(map);
var VDC_labels = new L.layerGroup();
//VDC_labels.addTo(map);

var district_boundary = new L.geoJson.ajax("data/district.geojson");
district_boundary.on('data:loaded', function(data) {
    district_boundary.setStyle(district_boundary_styles["Default"]["style"]);
    map.spin(false);
    labels(data, district_boundary);
});
district_boundary.addTo(map);

var vdc_boundary = new L.geoJson.ajax("data/vdc.geojson");
vdc_boundary.on('data:loaded', function(data) {
    vdc_boundary.setStyle(vdc_boundary_styles["Default"]["style"]);
    map.spin(false);
    labels(data, vdc_boundary);
});
// vdc_boundary.addTo(map);
function popUp(feature, layer) {
    //debugger;
    //popUpContent = "";
    //popUpContent += '<table>';
    popUpContent = '<b>' + feature.properties.Name + '</b>';
    layer.bindPopup(popUpContent);
}
var HTC_sites = new L.geoJson.ajax("data/htc_dummy.geojson", {
    onEachFeature: popUp
});

var searchControl = new L.Control.Search({
    layer: HTC_sites,
    propertyName: 'Name',
    circleLocation: false
});
//var searchControl = new L.Control.Search();
searchControl.on('search_locationfound', function(e) {
    map.setZoom(e.latlng);
    e.layer.openPopup();
    //debugger;

});

map.addControl(searchControl); //inizialize search control

// onEachFeature: function(feature, layer) {
//     console.log('on the run');
//     // layer.bindPopup(feature.properties.description);
// });

HTC_sites.on('data:loaded', function(data) {
    HTC_sites.eachLayer(HTC_sites_styles["Default"]["style"]);
    map.spin(false);
});
HTC_sites.addTo(map);

baseLayers = {};



var overlays = {
    "layers": {
        "OpenStreetMap": osm,
        "District": district_boundary,
        "VDC": vdc_boundary,
        "HTC Sites": HTC_sites
    },
    "Labels": {
        "District_labels": District_labels
    }
};


//label variable key must [key]_labels where key is the key defined in overlays. this is used to accesss value using string notation
var LABELS = {
    "VDC_labels": VDC_labels,
    "District_labels": District_labels
}
// synchronize layer and label
map.on("overlayadd", function(layer) {
    // console.log('layer add', layer);
    //console.log('onoverlayadd');
    if (LABELS[layer.name + "_labels"]) {
        map.addLayer(LABELS[layer.name + "_labels"]);
        // overlays[layer.name + "_labels"] = LABELS[layer.name + "_labels"];
        //console.log('check_zooms calling....');
        check_zooms();
        layersControlSettings.addOverlay(LABELS[layer.name + "_labels"], layer.name + "_labels", "Labels");
    }
})
map.on("overlayremove", function(layer) {
    // console.log('layer remove', layer);
    // console.log('layer.name + "_labels" ', layer.name + "_labels");
    // debugger;
    if (map.hasLayer(LABELS[layer.name + "_labels"])) {
        map.removeLayer(LABELS[layer.name + "_labels"]);
        layersControlSettings.removeLayer(LABELS[layer.name + "_labels"], layer.name + "_labels", "Labels");
        // console.log(LABELS[layer.name + "_labels removed"]);
    }
})

// layers control
layersControlSettings = L.control.groupedLayers(baseLayers, overlays, {
    collapsed: false
});
layersControlSettings.addTo(map);
$('#layersControl').append(layersControlSettings.onAdd(map));
$('.leaflet-top.leaflet-right').hide(); // temporary solution for hiding layers control

//check the active layers first 
district_boundary.on('dblclick', function(e) {
    a = map.getZoom();
    if (a < 19) {
        map.setZoom(a + 1);
    }
})
vdc_boundary.on('dblclick', function(e) {
    a = map.getZoom();
    if (a < 19) {
        map.setZoom(a + 1);
    }
});
HTC_sites.on('dblclick', function(e) {
    console.log('htc sites ma double click');
    map.setZoom(e.latlng);
});