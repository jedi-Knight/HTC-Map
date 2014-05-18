//styleChooserDiv = $('#styleChooser');
var styleChooserDiv = document.getElementById("styleChooser");
htcStyles = ["supported", "district"];
var rdiv = document.createElement('div');
rdiv.setAttribute("class", "btn-group-vertical");
rdiv.setAttribute("data-toggle", "modal");
styleChooserDiv.appendChild(rdiv);

function clickfunction(id) {
    if (id == 'supported') {
        $(HTC_sites._layers).each(function(a) {
            //check the data if it has supported by fhi or other
            console.log(a._img);
        });

    } else if (id == 'district') {

    }
}

$.each(htcStyles, function(index, val) {
    button = document.createElement('input');
    button.setAttribute("class", "btn btn-primary");
    button.value = val;
    button.innerHtml = val;
    button.id = val;
    button.type = 'button';
    button.name = "htcStyles";
    button.setAttribute("onclick", "clickfunction(this.id)");
    rdiv.appendChild(button);
});