function copyToClipboard() {
  var copyTarget = document.getElementById("copyTarget");
  copyTarget.select();
  document.execCommand("Copy");
}
function randN( n ){
  return Math.floor( Math.random()*n);
}
//クリックされた要素にclass追加,削除,他に存在するselected class削除
$( function() {
  $( ".size" ).click( function() {
    $( ".size" ).removeClass( "selected" ).addClass( "notSelected" );
    var clickIndex = $(" .size" ).index(this);
    $( ".size" ).eq( clickIndex ).removeClass( "notSelected" ).addClass( "selected" );
  })

  $( ".type" ).click( function() {
    $( ".type" ).removeClass( "selected" ).addClass( "notSelected" );
    var clickIndex = $( ".type" ).index( this );
    $( ".type" ).eq( clickIndex ).removeClass( "notSelected" ).addClass( "selected" );
  })
  $(".btn" ).click( function(){
    if( $( ".size" ).hasClass( "selected" ) && $( ".type" ).hasClass( "selected" ) ){
      let size = $( ".size.selected" ).text();
      let type = $( ".type.selected" ).text();
      var testStr = size + "\n";
      Number( size );
      // string or sequence で場合分け
      for(let i = 0; i < size; i++){
        testStr += randN( size ).toString();
        if(i < size-1 ) testStr += " ";
      }
      $( "textarea" ).text( testStr );
      copyToClipboard();
    }else{
      alert( "選択されていません" );
    }
  })
})

