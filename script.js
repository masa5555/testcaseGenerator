function selectSize() {
  let a = 1;
}

function copyToClipboard() {
  var copyTarget = document.getElementById("copyTarget");
  copyTarget.select();
  document.execCommand("Copy");
}
var copyClick = document.getElementById("copyTarget");
copyClick.addEventListener("click", copyToClipboard, false);

