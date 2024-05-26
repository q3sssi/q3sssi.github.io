document.addEventListener('DOMContentLoaded', () => {

    $( document ).ready(function() {
        $( ".ui-widget-content" ).draggable({
            scroll: false,
            revert: 'invalid',
            stack: ".cards_zone",
            create: function(){$(this).data('position',$(this).position())},
            cursor: "pointer",
            start:function(){$(this).stop(true,true)},
            
        });
        $( "#droppable" ).droppable({
            accept: ".ui-widget-content",
            drop: function( event, ui ) {
                $( this ).find( "p" );
                snapToMiddle(ui.draggable,$(this));
            }
        });
    });
    
    function snapToMiddle(dragger, target){
        var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 2;
        var leftMove= target.position().left - dragger.data('position').left + (target.outerWidth(true) - dragger.outerWidth(true)) / 2;
        dragger.animate({top:topMove,left:leftMove},{duration:200,easing:'linear'});
    }
});



const fullWidth = 4576
const fullHeight = 2048
const cardWidth = 352
const cardHeight = 512
  

function Card({
    card: { cardColor, cardType },
    chosenColor,
    type
  }) {
    const { cardScale } = useContext(DimensionContext)
  
    const scale = cardScale + (type === "main" ? 0.1 : 0)
  
    const typeIndex = cardTypeArray.indexOf(cardType) + (chosenColor ? 2 : 0)
    const colorIndex = cardColorArray.indexOf(chosenColor ?? cardColor)
  
    const xPos = -typeIndex * cardWidth
    const yPos = -colorIndex * cardHeight
  
    return (
      <div
        style={{
          backgroundImage: "url(active.svg)",
          backgroundOrigin: "border-box",
          backgroundPosition: `${xPos * scale}px ${yPos * scale}px`,
          backgroundSize: `${fullWidth * scale}px ${fullHeight * scale}px`,
          height: `${cardHeight * scale}px`,
          width: `${cardWidth * scale}px`
        }}
      />
    )
  }

