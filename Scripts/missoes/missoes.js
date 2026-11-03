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