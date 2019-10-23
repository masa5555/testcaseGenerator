//クリックされた要素にclass追加,削除,他に存在するselected class削除
$( function() {
  
  $(".size").click( function() {
    $(".size").removeClass("selected").addClass( "notSelected" );
    var clickIndex = $(".size").index(this);
    $(".size").eq(clickIndex).removeClass("notSelected").addClass( "selected" );
  })

  $(".type").click( function() {
    $(".type").removeClass("selected").addClass( "notSelected" );
    var clickIndex = $(".type").index(this);
    $(".type").eq(clickIndex).removeClass("notSelected").addClass( "selected" );
  })
})

function copyToClipboard() {
  var copyTarget = document.getElementById("copyTarget");
  copyTarget.select();
  document.execCommand("Copy");
}
var copyClick = document.getElementById("copyTarget");
copyClick.addEventListener("click", copyToClipboard, false);

