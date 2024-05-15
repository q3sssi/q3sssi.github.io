var b = 0;
function plus(){
    const a = new Date();
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
}