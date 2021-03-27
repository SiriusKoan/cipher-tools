function getAutoCopy() {
    var checkbox = document.getElementById("auto_copy");
    return checkbox.checked;
}

function copy(id) {
    if (getAutoCopy()) {
        var text = document.getElementById(id);
        text.select();
        text.setSelectionRange(0, 9999999);
        document.execCommand("copy");
    }
}

function clear() {
    var all_input = document.getElementsByTagName("input");
    for (var i = 0; i < all_input.length; i++) {
        all_input[i].value = "";
    }
}

export { copy, clear };