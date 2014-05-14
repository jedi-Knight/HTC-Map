        var north_east = L.latLng(26.328231, 80.029907);
        var south_west = L.latLng(30.605155, 88.225708);
        var bounds = L.latLngBounds(north_east, south_west);
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
        var map = L.map('map').setView([28.425, 84.435], 7),
            osmUrl = 'https://a.tiles.mapbox.com/v3/poshan.i65ff4hn/{z}/{x}/{y}.png',
            osmAttribution = 'Map data &copy; 2012 OpenStreetMap contributors';
        var osm = L.TileLayer.boundaryCanvas(osmUrl, {
            boundary: nep_latlng_array
        }).addTo(map);

        var district_boundary = new L.geoJson();
        district_boundary.addTo(map);

        var HTC_sites = new L.geoJson();
        HTC_sites.addTo(map);




        var baseLayers = {
            "OpenStreetMap": osm,
            "District": district_boundary
        };
        var overlays = {
            "HTC Sites": HTC_sites
        };
        L.control.layers(baseLayers, overlays, {
            collapsed: false
        }).addTo(map);
         // $('#layersControl').appendChild(new L.control.layers(baseLayers, overlays,{collapsed:false}).onAdd(map));



         //htc_dummy data
        $.ajax({
            dataType: "json",
            url: "data/htc_dummy.geojson",
            success: function(data) {
                $(data.features).each(function(key, data) {
                    // L.geoJson(data).addTo(map);
                    HTC_sites.addData(data);

                    //data.geometry.coordinates
                    //data.properties['Name of Se'] is name of htc site
                    //data.properties.no_of_case is no of cases
                    //data.properties.ia  is implementing agency

                });

            }
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