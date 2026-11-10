let jogador = {
    chave: false,
}

function abrirPortaMissao1(){
    porta1 = document.getElementById('porta1');
    if(jogador.chave == false){
        porta1.style.animation = "none";
        porta1.offsetHeight;
        porta1.style.animation = "animacaoPorta 0.1s";
    }
}

let missao1 = document.getElementById("missao1");
let missao2 = document.getElementById("missao2");
let missao3 = document.getElementById("missao3");

function cenaDireita(){
    if(missao1.style.display == 'block'){
        
    }else if(missao2.style.display == 'block'){

    }else{

    }
}

function cenaEsquerda(){

}