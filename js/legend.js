var legend = L.control({
    position: 'bottomleft'
});
legend.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info1'); // create a div with a class "info1"
    this._legends = {};
    for (layer in STYLES) {
        this._legends[layer] = STYLES[layer]['styles']['Default']['legend'];
    }
    this.update(this._legends);
    return this._div;
};

legend.update = function(legends) {
    todisplay = '<h3>Legend</h3>';
    for (le in legends) {

        console.log('le ', le);
        console.log('legends[le] ', legends[le]);
        this._legends[le] = legends[le];
        if (!this._legends[le]) {
            console.log('this._legends[le] ', this._legends[le]);
            delete this._legends[le];
        }
        // console.log('this._legends ', this._legends);
    }
    for (le in this._legends) {
        todisplay += this._legends[le];
        todisplay += "<br>";
    }
    this._div.innerHTML = todisplay
}

legend.addTo(map);