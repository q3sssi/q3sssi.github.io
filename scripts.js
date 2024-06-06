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

    
let tg = window.Telegram.WebApp;
let usercard = document.getElementById("usercard"); //получаем блок usercard 
let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} 
${tg.initDataUnsafe.user.id}
${tg.initDataUnsafe.user.language_code}`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

});
