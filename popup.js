// base64
document.getElementById("base64_encode").addEventListener("click", () => {
    let input = document.getElementById("base64Field");
    input.value = window.btoa(input.value);
});
document.getElementById("base64_decode").addEventListener("click", () => {
    let input = document.getElementById("base64Field");
    input.value = window.atob(input.value);
});

// URI
document.getElementById("URI_encode").addEventListener("click", () => {
    let input = document.getElementById("URIField");
    input.value = encodeURI(input.value);
});
document.getElementById("URI_decode").addEventListener("click", () => {
    let input = document.getElementById("URIField");
    input.value = decodeURI(input.value);
});
document.getElementById("load_url").addEventListener("click", () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        document.getElementById("URIField").value = url;
    });
});

// sha1
document.getElementById("sha1").addEventListener("click", () => {
    let SHA1 = new Hashes.SHA1;
    let input = document.getElementById("sha1Field");
    input.value = SHA1.hex(input.value);
});

// sha256
document.getElementById("sha256").addEventListener("click", () => {
    let SHA256 = new Hashes.SHA256;
    let input = document.getElementById("sha256Field");
    input.value = SHA256.hex(input.value);
});

// sha512
document.getElementById("sha512").addEventListener("click", () => {
    let SHA512 = new Hashes.SHA512;
    let input = document.getElementById("sha512Field");
    input.value = SHA512.hex(input.value);
});

// md5
document.getElementById("md5").addEventListener("click", () => {
    let MD5 = new Hashes.MD5;
    let input = document.getElementById("md5Field");
    input.value = MD5.hex(input.value);
});

