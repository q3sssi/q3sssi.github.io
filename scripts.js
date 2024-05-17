document.addEventListener('DOMContentLoaded', () => {

    $( function() {
        $( "#draggable" ).draggable({ revert: "invalid" });
        $( "#draggable2" ).draggable({ revert: "invalid" });
        $( "#draggable3" ).draggable({ revert: "invalid" });
        $( "#draggable4" ).draggable({ revert: "invalid" });
     
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