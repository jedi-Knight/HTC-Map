/*
    make the z-index of label greater than that of markers
*/

function districtpopUp(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
    var popUp = '<div id="popup">';
    popUp += '<table>';
    for (data in layer.feature.properties) {
        popUp += "<tr>" + "<td>" + underscoreToSpace(data) + "</td>" + "<td>" + layer.feature.properties[data] + "</td>" + "</tr>";

    }
    popUp += '</table>';
    popUp += '</div>';
    layer.bindPopup(L.popup({
        closeOnClick: true,
        closeButton: true,
        keepInView: true,
        autoPan: true,
        maxHeight: 300,
        minWidth: 375
    }).setContent(popUp));
}

function htc_popUp(feature, layer) {
    //add the supported by and HealthFacility type in Popup Table
    // layer.bindLabel(
    // debugger;
    var name = layer.feature.properties.Name;
    //send this to a function which converts _ to space


    var popUpContent = "";
    popUpContent += '<table>';
    for (data in layer.feature.properties) {
        // console.log('feature ', feature);
        dataspaced = underscoreToSpace(data);
        popUpContent += "<tr>" + "<td>" + dataspaced + "</td>" + "<td>" + "  " + layer.feature.properties[data] + "</td>" + "</tr>";
    }
    popUpContent += '</table>';

    layer.bindPopup(L.popup({
        closeOnClick: true,
        closeButton: true,
        keepInView: true,
        autoPan: true,
        maxHeight: 200,
        minWidth: 350
    }).setContent(popUpContent));
    layer.bindLabel(name, {
        noHide: false
    });
    layer.options.riseOnHover = true;
    /*
    layer.on({
        mouseover: black,
        mouseout: pearljam,
        click: oasis
    });
    */
}