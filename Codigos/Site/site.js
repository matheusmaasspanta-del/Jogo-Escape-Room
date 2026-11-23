function abrirMenu(){
    let menu = document.getElementById('menu');
    if(getComputedStyle(menu).display == 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }

}