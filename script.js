// Use below 3 functions in the jQuery function
function copyToClipboard(){
  let copyTarget = document.getElementById("copyTarget");
  copyTarget.select();
  document.execCommand("Copy");
}
function randNum(n){
  return Math.floor( Math.random()*n );
}
function randLowerCaseAtoZ(){
  let num = randNum(26);
  let az = "abcdefghijklmnopqrstuvwxyz";
  return az.charAt(num);
}

// jQuery
$( function() {
  // Call when cline one of the "size" button
  $( ".size" ).click( function() {
    $( ".size" ).removeClass( "selected" ).addClass( "notSelected" );
    let clickIndex = $(" .size" ).index(this);
    $( ".size" ).eq( clickIndex ).removeClass( "notSelected" ).addClass( "selected" );
  })

  // Call when click one of the "type" button
  $( ".type" ).click( function() {
    $( ".type" ).removeClass( "selected" ).addClass( "notSelected" );
    var clickIndex = $( ".type" ).index( this );
    $( ".type" ).eq( clickIndex ).removeClass( "notSelected" ).addClass( "selected" );
  })
  
  // Call when click the "Copy & Generate" button
  $(".btn" ).click( function(){
    
    // On codition that selected 2 types of buttons
    if( $( ".size" ).hasClass( "selected" ) && $( ".type" ).hasClass( "selected" ) ){
      
      // Input
      let size = $( ".size.selected" ).text();
      let type = $( ".type.selected" ).text();

      // First line of the test case
      let testStr = size + "\n";

      // Second line of the test case
      Number( size ); // Type Translation: string => number
      if(type == "sequence"){
        for(let i = 0; i < size; i++){
          testStr += randNum(size).toString();
          if(i < size-1) testStr += " ";
        }
      }else if(type == "string"){
        for(let i = 0; i < size; i++){
          testStr += randLowerCaseAtoZ();
        }
      }else if(type == "pair"){
        for(let i = 0; i < size; i++){
          testStr += randNum(size).toString() + " " + randNum(size).toString() + "\n";
        }
      }

      // Copy the test case
      $( "textarea" ).text( testStr );
      copyToClipboard();

    }else{ // Invalied selection
      alert( "選択されていません" );
    }
    
  })
})
