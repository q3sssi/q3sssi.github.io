var b = 0;
function plus(){
    const a = new Date();
    document.getElementById("mainblock").innerHTML = b++;

    current = document.getElementById("menu").style.display;
    if(current == none){
        document.getElementById("menu").style.display = display;
    }
    else{
        document.getElementById("menu").style.display = none;
    }
}