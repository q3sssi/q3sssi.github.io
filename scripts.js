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

document.addEventListener('DOMContentLoaded', () => {
    const draggableElement = document.getElementById('draggableElement');
    draggableElement.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', '');
    });
  
    draggableElement.addEventListener('dragend', (event) => {
      console.log('Dragging ended');
    });
  
    const dropTarget = document.getElementById('dropTarget');
    dropTarget.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  
    dropTarget.addEventListener('drop', (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData('text/plain');
      console.log(`Dropped element with id ${id} onto drop target`);
    });
  });

}

