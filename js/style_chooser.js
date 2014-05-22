//styleChooserDiv = $('#styleChooser');
var styleChooserDiv = document.getElementById("styleChooser");

$.each(styles, function(index, val1) {
    switch (val1['geometry']) {
        case "point":
            // console.log(val['geometry']);
            nameDiv = $('<div>', {
                text: val1['display']
            }).appendTo(styleChooserDiv);
            $.each(val1['styles'], function(index, val2) {
                styleDiv = $('<button>', {
                    text: index,
                    click: function() {
                        val1['layer'].eachLayer(val1['styles'][index]);
                    }
                }).appendTo(nameDiv);
            });
            break;
        default:
            // console.log(val['geometry']);
            nameDiv = $('<div>', {
                text: val1['display']
            }).appendTo(styleChooserDiv);
            $.each(val1['styles'], function(index, val2) {
                styleDiv = $('<button>', {
                    text: index,
                    click: function() {
                        console.log("val1=", val1);
                        val1['layer'].setStyle(val1['styles'][index]);
                    }
                }).appendTo(nameDiv);
            });
            break;
    }
});