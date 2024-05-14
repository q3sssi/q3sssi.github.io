var b = 0;
function plus(){
    const a = new Date();
    document.getElementById("mainblock").innerHTML = b++;

    current = document.getElementById("menu");
    if(current.style.display == 'none'){
        current.style.display = 'flex';
    }
    else{
        current.style.display = 'none';
    }
}