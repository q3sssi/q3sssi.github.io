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
    ${tg.initDataUnsafe.user.language_code}
    ${tg.initDataUnsafe.user.photo_url}`;
    //выдем имя, "фамилию", через тире username и код языка
    document.getElementById("usercard").appendChild(profName);

    let img = document.createElement('img');
    img.src = `${tg.initDataUnsafe.user.photo_url}`;
        
    img.setAttribute("height", "768");
    img.setAttribute("width", "1024");
    img.setAttribute("alt", "Flower");
    document.getElementById("usercard").appendChild(img);


    function chat_line(){
        let data = document.getElementById('data');
        let chat_line = document.createElement('p');
        chat_line.innerText = data;
        document.getElementById('chat').appendChild(chat_line);
    }
});
