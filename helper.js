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

export { copy };