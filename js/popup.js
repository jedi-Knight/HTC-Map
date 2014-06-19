function districtpopUp(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
    var popUp = '<div id="popup">';
    popUp += '<table>';
    for (data in layer.feature.properties) {
        //
        //
        popUp += "<tr>" + "<td>" + data + "</td>" + "<td>" + layer.feature.properties[data] + "</td>" + "</tr>";

    }
    popUp += '</table>';
    popUp += '</div>';
    layer.bindPopup(L.popup({
        closeOnClick: true,
        closeButton: true,
        keepInView: true,
        autoPan: true,
        maxHeight: 400,
        minWidth: 500
    }).setContent(popUp));
}

function black(e) {
    // debugger;
    var layer = e.target;
    var name = layer.feature.properties.Name;
    offsetValue = L.point(20, -20);
    var popUP = L.popup({
        closeOnClick: true,
        closeButton: true,
        keepInView: true,
        autoPan: true,
        maxHeight: 200,
        minWidth: 50
    }).setContent(name);

    layer.bindPopup(popUP, {
        offset: offsetValue
    }).openPopup();
}

function _getParent(element, className) {

    var parent = element.parentNode;

    while (parent != null) {

        if (parent.className && L.DomUtil.hasClass(parent, className))
            return parent;

        parent = parent.parentNode;

    }

    return false;

};

function _popupMouseOut(e) {

    // detach the event
    L.DomEvent.off(this._popup, "mouseout", this._popupMouseOut, this);

    // get the element that the mouse hovered onto
    var target = e.toElement || e.relatedTarget;

    // check to see if the element is a popup
    if (this._getParent(target, "leaflet-popup"))
        return true;

    // check to see if the marker was hovered back onto
    if (target == this._icon)
        return true;

    // hide the popup
    this.closePopup();

};

function pearljam(e) {
    // debugger;
    // hide the popup
    this.closePopup();
    // console.log(e);
    // console.log('mouseout');
}

function oasis(e) {
    console.log('clicked');
    var layer = e.target;
    var popUpContent = "";
    popUpContent += '<table>';
    for (data in layer.feature.properties) {
        popUpContent += "<tr>" + "<td>" + data + "</td>" + "<td>" + layer.feature.properties[data] + "</td>" + "</tr>";
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
}

function htc_popUp(feature, layer) {
    //debugger;!@#$%^&*(%$#@#$%^&*()*&^%$#$%^&*()(*&%$#@#$^&*()(*^%$#$%^&*()(*^%$#%^&*()(*^%$)))))
    //add the supported by and HealthFacility type in Popup Table
    layer.on({
        mouseover: black,
        mouseout: pearljam,
        click: oasis
    });

}