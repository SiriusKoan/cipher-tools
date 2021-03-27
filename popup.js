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

document.getElementById("base64_encode").addEventListener("click", base64_encode)
document.getElementById("base64_decode").addEventListener("click", base64_decode)

function base64_encode() {
    var input = document.getElementById("base64Field");
    input.value = window.btoa(input.value);
    copy("base64Field");
}
function base64_decode() {
    var input = document.getElementById("base64Field");
    input.value = window.atob(input.value);
    copy("base64Field");
}

document.getElementById("URI_encode").addEventListener("click", URI_encode)
document.getElementById("URI_decode").addEventListener("click", URI_decode)
document.getElementById("load_url").addEventListener("click", load_current_url)

function load_current_url() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        document.getElementById("URIField").value = url;
    });
}
function URI_encode() {
    var input = document.getElementById("URIField");
    input.value = encodeURI(input.value);
    copy("URIField");
}
function URI_decode() {
    var input = document.getElementById("URIField");
    input.value = decodeURI(input.value);
    copy("URIField");
}