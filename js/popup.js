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
    // popUp += layer.feature.properties.NAME_3;
    // popUp += '</br>';
    // popUp += layer.feature.properties.district_ANC_PosWomen_tripleARV_Prophylaxis_2012;
    // popUp += '</br>';
    // popUp += layer.feature.properties.district_ANC_Women_ARV_Prophylaxis_2010;
    // popUp += '</br>';
    // popUp += layer.feature.properties.district_ANC_Women_ARV_Prophylaxis_2011;
    // popUp += '</br>';
    // popUp += layer.feature.properties.district_Contact;
    // popUp += '</br>';
    // popUp += layer.feature.properties.district_Cum_death_2010;
    /*district_Cum_death_2011;
    district_Cum_death_2012;
    district_Cum_on_ART_2010;
    district_Cum_on_ART_2011;
    district_Cum_on_ART_2012;
    district_Est_FSWs;
    district_Est_MTC;
    district_HIV_Pos_Female_2010;
    district_HIV_Pos_Female_2011;
    district_HIV_Pos_Female_2012;
    district_HIV_Pos_TG_2012;
    district_HIV_Pos_delivery_2010;
    district_HIV_Pos_delivery_2011;
    district_HIV_Pos_delivery_2012;
    district_HIV_Pos_male_2010;
    district_HIV_Pos_male_2011;
    district_HIV_Pos_male_2012;
    district_IA_TI_FSW: ""
    district_IA_TI_MSM: ""
    district_IA_TI_Migrants: ""
    district_IA_TI_PLHIV: ""
    district_IA_TI_PWIDs: ""
    district_IA_TI_Prison: ""
    district_No_of_ART_OI: "1"
    district_No_of_CCC: "2"
    district_No_of_CCC_FHI360: ""
    district_No_of_CCC_FPAN: ""
    district_No_of_CCC_GoV: ""
    district_No_of_CCC_Others: ""
    district_No_of_CCC_PF: ""
    district_No_of_CCC_Save: ""
    district_No_of_CHBC: ""
    district_No_of_CHBC_FHI360: ""
    district_No_of_CHBC_FPAN: ""
    district_No_of_CHBC_GoV: ""
    district_No_of_CHBC_Save: ""
    district_No_of_CHBC_Save_1: ""
    district_No_of_CHBC_others: ""
    district_No_of_HIV_tested_2010: "2463"
    district_No_of_HIV_tested_2011: "2358"
    district_No_of_HIV_tested_2012: "3108"
    district_No_of_HTC: "3"
    district_No_of_HTC_FHI360: ""
    district_No_of_HTC_FPAN: "2"
    district_No_of_HTC_GoV: "1"
    district_No_of_HTC_Others: ""
    district_No_of_HTC_PF: ""
    district_No_of_HTC_Save: ""
    district_No_of_PMTCT: "1"
    district_No_of_STI: "3"
    district_No_of_STI_FHI360: ""
    district_No_of_STI_FPAN: ""
    district_No_of_STI_Gov: ""
    district_No_of_STI_PF: ""
    district_No_of_STI_Save: ""
    district_No_of_STI_others: ""
    district_No_of_TI_FSWs: ""
    district_No_of_TI_MSM: ""
    district_No_of_TI_PLHIV: "1"
    district_No_of_TI_PWIDs: ""
    district_No_of_TI_migrants: ""
    district_No_of_TI_prison: ""
    district_Positive_ANC_2010: "0"
    district_Positive_ANC_2011: "0"
    district_Positive_ANC_2012: "0"
    district_Region: "Western"
    district_SN: "36"
    district_Total_PLHIV_2010;
    district_Total_PLHIV_2011;
    district_Total_PLHIV_2012;
    district_Women_tested_on_ANC_2010;
    district_Women_tested_on_ANC_2011;
    district_Women_tested_on_ANC_2012;
    district_baby_received_ARV_Pro_2010;
    district_baby_received_ARV_Pro_2011;
    district_baby_received_ARV_Pro_2012;*/
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


function htc_popUp(feature, layer) {
    //debugger;!@#$%^&*(%$#@#$%^&*()*&^%$#$%^&*()(*&%$#@#$^&*()(*^%$#$%^&*()(*^%$#%^&*()(*^%$)))))
    //add the supported by and HealthFacility type in Popup Table
    var popUpContent = "";
    /*
    popUpContent += '<table><tr>';
    popUpContent += '<td>';
    popUpContent += '<i>';
    popUpContent += 'NAME:</i>';
    popUpContent += '</td>';
    popUpContent += '<td>';
    popUpContent += '<b>' + feature.properties.Name + '</b>';
    popUpContent += '</td>';
    popUpContent += '</tr>';
    popUpContent += '<tr><td>';
    popUpContent += 'Supported By:';
    popUpContent += '</td>';
    popUpContent += '<td>';
    popUpContent += '<b>' + feature.properties.Supported + '</b>';
    popUpContent += '</td>';
    popUpContent += '</tr>';
    popUpContent += '<tr><td>';
    popUpContent += 'Health Facility Type';
    popUpContent += '</td>';
    popUpContent += '<td>';
    popUpContent += '<b>' + feature.properties.Service_Co + '</b>';
    popUpContent += '</td>';
    popUpContent += '</tr>';
    popUpContent += '</table>';
    
    */
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