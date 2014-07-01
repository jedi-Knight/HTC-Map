/**district popup content filters**/
sublist = ["Gov", "GoV", "FHI360", "Save", "FPAN", "Others"]; //subgroup items containing these
districtDataTxt = {
    "district": " ",
    "Est": "Estimated",
    " GoV": " Gov",
    " Gov": " Government",
    " FHI360": " Saath Saath Project",
    " Save": " Save the Children",
    "IA T": "Implementing Agency T",
    " TI": " Targeted Intervention",
    "No of": "Number of",
    "Cum": "Cummulative",
    "null": "NA"
}; //text replace for group headers in popup
districtSublistTxt = {
    "No of": " ",
    "HTC": " ",
    "STI": " ",
    "CCC": " ",
    "CHBC": " ",
    "GoV": "Gov",
    "Gov": "Government",
    "FHI360": "Saath Saath Project",
    "Save": "Save the Children",
    " FPAN": " Family Planning Association Nepal",
    "Cum ": "Cummulative ",
    "null": "NA"
}; //text replace for group items in popup
sublistAnnualData = ["2010", "2020"];
/****/

//function listenToElementChange(selector, fn){
//    $(selector).bind("childcountchanged",fn);
//    n=$(selector).children().length;
//    setInterval(function(){    
//        if(($(selector).children().length - n) !== 0){
//                $(selector).trigger("childcountchanged");
//                n = $(selector).children().length;
//        };        
//    }, 30);
//    
//}

$.fn.txtContentChange = function(jsonObj) {
    return this.each(function() {
        for (cTxt in jsonObj) {
            $(this).text($(this).text().replace(cTxt, jsonObj[cTxt]));
        }
    });
};

$.fn.formatFlatTable = function(sublistItems, sublistTxtChange, listTxtChange) {
    return this.each(function() {
        console.log("hello everybody");
        $(this).find("tr").addClass("listitem");
        $(this).find("tr").removeClass("sublist");
        for (txt in sublistItems) {
            $(this).find("tr.listitem td:contains('" + sublistItems[txt] + "')").parent().toggleClass("listitem sublist");
        };
        $(this).find("tr.sublist").prev(".listitem").addClass("expandable");
        $(this).find("tr.listitem td").txtContentChange(listTxtChange);
        $(this).find("tr.sublist td").txtContentChange(sublistTxtChange);

        //        $(this).filter("tr.listitem td:contains('20')").parent().toggleClass("listitem sublist");
        //        $(this).filter("tr.sublist td:contains('20')").parent().prev("tr.listitem").append($($(this).parent().prev("tr.listitem").next().children()[0]).text().replace("2010", ""));
    });
};

$.fn.subgroupFlatTableItems = function(sublistItems) { //unresponsive script when using sublistItems instead of hardcoding '2010'
    groupHds = [];
    return this.each(function() {
        for (iTxt in sublistItems) {
            z = $(this).find("td:contains('" + sublistItems[iTxt] + "')");
            for (jNd in z) {
                s = $(z[jNd]).text().replace(sublistItems[iTxt], "");
                if ($.inArray(s, groupHds) === -1) groupHds.push(s);
            }
        }

        for (kTxt in groupHds) {
            $($(this).find("td:contains('" + groupHds[kTxt] + "')")[0]).parent().before("<tr><td>" + groupHds[kTxt] + "</td><td></td></tr>");
        }
        return;
    });
};

function subgroupAndFormatTable(fnc) {
    if ($(document).triggerHandler("format")) return; //the handler has been executed because it's not the first run of this function, and event (trigger) is alady registered, so exit

    $(document).bind("format", fnc); //if first run, register the event (trigger)
    id = setInterval(function() {
        $("#popup").ready(function() {
            clearInterval(id);
            $(document).triggerHandler("format");
        });
    }, 30);

};


$(document).ready(function() {
    /**ready the globals**/
    for (i = parseInt(sublistAnnualData[0]); i < parseInt(sublistAnnualData[1]); i++) {
        sublistAnnualData.push(i + '');
    }
    /****/

    /**temporary solution for stylechooser**/
    z = [];
    $("div.control-styles div#styleChooser div").hide();
    z.push($("div.control-styles div#styleChooser div")[2]);
    $(z).show();
    /****/

    /**zoom-to-full-extent button position**/
    $("div.leaflet-control-zoom").append("<a class='new-control' href=# title='Zoom to extent' onclick = 'fullextent()'><div id = 'zoom'><img src = 'img/MapFullExtent.png'></div></a>");
    /****/

    /**layers panel collapsible**/
    $("#layersControl .leaflet-control-layers-group span.leaflet-control-layers-group-name:first").replaceWith("<div class='leaflet-control-layers-group-name trigger layers'>Layers<div class='lever on'></div></div>");
    $("#layersControl .leaflet-control-layers-group div.leaflet-control-layers-group-name").click(function() {
        $(this).nextAll().toggle(100);
        $(this).parent().next().toggle(100);
        $(".trigger.layers .lever").toggleClass("on off");
    });
    /****/
    /**stylechooser collapsible**/
    $(".trigger.styles").click(function() {
        $(this).next().toggle(100);
        $(".trigger.styles .lever").toggleClass("on off");
    });
    /****/

    /**disable pan on when dragging on legend**/
    $(".leaflet-control").mouseover(function() {
        map.dragging.disable();
    });
    $(".leaflet-control").mouseout(function() {
        map.dragging.enable();
    });
    /****/

    /**popup styling**/

    //    listenToElementChange(".leaflet-popup-pane", function(){
    //        $("#popup").formatFlatTable(sublist, districtSublistTxt, districtDataTxt);
    //    });
    /****/
    //map.setZoom(7.4);
    /**this code block can be safely removed**/
    xmark = 2; //switch for trying different markers:
    //set xmark=1 for pink-white balloons, set xmark = 2 for red balloons
});
