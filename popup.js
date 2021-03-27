document.getElementById("base64_encode").addEventListener("click", base64_encode)
document.getElementById("base64_decode").addEventListener("click", base64_decode)

function base64_encode() {
    var input = document.getElementById("code").value;
    document.getElementById("code").value = window.btoa(input);
}
function base64_decode() {
    var input = document.getElementById("code").value;
    document.getElementById("code").value = window.atob(input);
}
