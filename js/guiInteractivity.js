//var layersControlLabel = "<div class='trigger layers passive'> Layers</div>";
$(document).ready(function() {
    //$(".leaflet-control-layers").prepend(layersControlLabel);
    $("#styleChooser").hide(1000);

    $(".trigger.styles").click(function() {
        $(this).next().toggle(100);
        $(".trigger.styles .lever").toggleClass("on off");
    });
    //map.setZoom(7.4);


    /**this code block can be safely removed**/
    
    xmark = 2; //switch for trying different markers:
                        //set xmark=1 for pink-white balloons, set xmark = 2 for red balloons
    map.on("zoomend", function() {
        $(".leaflet-marker-icon").css("width", Math.ceil(map.getZoom() / 9) * 10 + Math.floor(map.getZoom() / 11) * 10 + "px");
        $(".leaflet-marker-icon").css("height", Math.ceil(map.getZoom() / 9) * 15+ Math.floor(map.getZoom() / 11) * 15 + "px");
                //sets marker width and height for zoom levels:
                        //upto 9: 10px*15px
                        //10-11: 20px*30px
                        //above 11: 30px*45px
        $(".leaflet-marker-icon").attr("src", "img/marker" + xmark + Math.ceil(map.getZoom() / 10) + ".png");
                //sets markers for zoom levels:
                    //upto 10: coloured balloon
                    //above 10: coloured balloon with icon
    });
    
    /****/

});