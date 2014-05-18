//styleChooserDiv = $('#styleChooser');
var styleChooserDiv = document.getElementById("styleChooser");
htcStyles = ["supported", "district"];
var rdiv = document.createElement('div');
rdiv.setAttribute("class", "btn-group-vertical");
rdiv.setAttribute("data-toggle", "modal");
styleChooserDiv.appendChild(rdiv);

function clickfunction(id) {
    alert(id);
    HTC_sites.redraw();
}

$.each(htcStyles, function(index, val) {
    button = document.createElement('input');
    button.setAttribute("class", "btn btn-primary");
    button.value = val;
    button.innerHtml = val;
    button.id = index;
    button.type = 'button';
    button.name = "htcStyles";
    button.setAttribute("onclick", "clickfunction(this.id)");
    rdiv.appendChild(button);
});