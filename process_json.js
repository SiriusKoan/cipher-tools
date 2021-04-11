json = document.body.innerText;
var json_block = document.createElement("pre");
json_block.innerText = JSON.stringify(JSON.parse(json), null, 4);
document.body.appendChild(json_block);