styleChooserDiv = $('#styleChooser');

htcStyles = ["supported", "district"];

$.each(htcStyles, function(index, val) {
    button = document.createElement('input');
    button.value = val;
    button.innerHtml = val;
    button.type = 'radio';
    button.name = "htcStyles";
    styleChooserDiv.append(button);
});