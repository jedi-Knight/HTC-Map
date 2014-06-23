var legend = L.control({
    position: 'bottomleft'
});
legend.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info1'); // create a div with a class "info1"
    this._legends = {};
    for (layer in STYLES) {
        this._legends[STYLES[layer]["display"]] = STYLES[layer]['styles']['Default']['legend'];
    }
    this.update(this._legends);
    return this._div;
};

legend.update = function(legends) {
    todisplay = '<h3>Legend</h3>';
    // update layer in legend
    for (le in legends) {
        //
        //
        this._legends[le] = legends[le];
        if (!this._legends[le]) {
            //
            delete this._legends[le];
        }
        //
    }
    // write out html for legend
    for (le in this._legends) {
        todisplay += "<div>" + le + this._legends[le] + "</div>";
        todisplay += "";
    }
    this._div.innerHTML = todisplay
}

legend.addTo(map);