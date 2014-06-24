/*
	marker cluster
*/


markers = new L.markerClusterGroup();
markers.addLayer(HTC_sites);
map.addLayer(markers);