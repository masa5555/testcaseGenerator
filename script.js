function copyToClipboard() {
  let copyTarget = document.getElementById("copyTarget");
  copyTarget.select();
  document.execCommand("Copy");
}
function randN( n ){
  return Math.floor( Math.random()*n);
}
function randAZ(){
  let num = randN( 26 );
  let az = "abcdefghijklmnopqrstuvwxyz";
  return az.charAt(num);
}
//クリックされた要素にclass追加,削除,他に存在するselected class削除
$( function() {
  $( ".size" ).click( function() {
    $( ".size" ).removeClass( "selected" ).addClass( "notSelected" );
    let clickIndex = $(" .size" ).index(this);
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
      let testStr = size + "\n";
      Number( size );
      if( type == "sequence" ){
        for(let i = 0; i < size; i++){
          testStr += randN( size ).toString();
          if(i < size-1 ) testStr += " ";
        }
      }else if(type == "string" ){
        for(let i = 0; i < size; i++){
          testStr += randAZ();
        }
      }else if( type == "pair" ){
        for(let i = 0; i< size; i++){
          testStr += randN(size).toString() + " " + randN(size).toString() + "\n";
        }
      }
      $( "textarea" ).text( testStr );
      copyToClipboard();
    }else{
      alert( "選択されていません" );
    }
  })
})

