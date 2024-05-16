var b = 0;
let tg = window.Telegram.WebApp;

function plus(){
    document.getElementById("mainblock").innerHTML = b++;

    current = document.getElementById("menu").style.display;
    if(current == 'none'){
        document.getElementById("menu").style.display = 'flex';
    }
    else{
        document.getElementById("menu").style.display = 'none';
    }

const audio = document.querySelector('audio');
audio.play();
tg.expand();

  
}


document.addEventListener('DOMContentLoaded', () => {
    $( function() {
        $( "#draggable" ).draggable({ revert: "valid" });
     
        $( "#droppable" ).droppable({
          classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
          },
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
        });
      } );
});