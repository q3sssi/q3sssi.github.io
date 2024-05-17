document.addEventListener('DOMContentLoaded', () => {

    $( document ).ready(function() {
        $( ".ui-widget-content" ).draggable({
            scroll: false,
            revert: 'invalid',
            stack: false,
            create: function(){$(this).data('position',$(this).position())},
            cursor: "pointer",
            start:function(){$(this).stop(true,true)},
            drag: function(event, ui)
            {
                $( ".droparea" ).removeClass( "ui-state-highlight" );
            }
        });
        $( "#droppable" ).droppable({
            accept: ".ui-widget-content",
            drop: function( event, ui ) {
                $( this ).addClass( "ui-state-highlight" ).find( "p" );
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



