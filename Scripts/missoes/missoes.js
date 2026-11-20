let jogador = {
    chave: false,
    papelComCodigoMissao1: false, 
    codigoMissao1: null,
    obsidians: 0,
}

let missao1 = document.getElementById('missao1');
let missao2 = document.getElementById('missao2');
let missao3 = document.getElementById('missao3');

// Missão 1

function gerarCodigo(){
    let codigo = Math.floor(Math.random() * 9000) + 1000;
    return codigo;
}

function mostrarPapelCodigo(){
    let papel = document.getElementById('codigo1');
    if(jogador.papelComCodigoMissao1 == false){
        if(jogador.codigoMissao1 == null){
            jogador.codigoMissao1 = gerarCodigo();
        }
        papel.innerHTML = `<p class="codigoTexto"><strong>${jogador.codigoMissao1}</strong></p>`
        papel.style.display = 'flex';
        jogador.papelComCodigoMissao1 = true;
    }
}

function esconderPapel(){
    let papel = document.getElementById('codigo1');
    papel.style.display = 'none';
}

function abrirPortaMissao1(){
    let porta1 = document.getElementById('porta1');
    let porta1Aberta = document.getElementById('porta1Aberta');
    if(jogador.chave == false){
        porta1.style.animation = "none";
        porta1.offsetHeight;
        porta1.style.animation = "animacaoPorta 0.1s";
    }else{
        porta1.style.display = 'none';
        porta1Aberta.style.display = 'block';
    }
}

function abrirBauMissao1(){
    let bau1Fechado = document.getElementById('bau1Fechado');
    let fechadura = document.getElementById('fechadura1');

    if(jogador.papelComCodigoMissao1 == false){
        bau1Fechado.style.animation = "none";
        bau1Fechado.offsetHeight;
        bau1Fechado.style.animation = "animacaoBau 0.1s";
    }else{
        fechadura.style.display = 'flex';
    }
}

function confirmarCodigoMissao1(){
    let fechadura = document.getElementById('fechadura1');
    let visor1 = document.getElementById('visor');
    let bau1Fechado = document.getElementById('bau1Fechado');
    let bau1Aberto = document.getElementById('bau1Aberto');
    let chave = document.getElementById('chave');
    if(visor1.value == jogador.codigoMissao1){
        fechadura.style.display = 'none';
        bau1Fechado.style.display = 'none';
        bau1Aberto.style.display = 'block';
        chave.style.display = 'block';
    }else{
        fechadura.style.animation = 'none';
        fechadura.offsetHeight;
        fechadura.style.animation = 'animacaoFechadura 0.1s';
    }
}

function pegarChave(){
    let chave = document.getElementById('chave');
    chave.style.display = 'none';
    jogador.chave = true;
}

function avancarMissao(){
    let concluir;
    if(getComputedStyle(missao1).display == 'block'){
        concluir = document.getElementById('conclusaoMissao1');
        concluir.style.display = 'block';
    }
    else if(getComputedStyle(missao2).display == 'block'){

    }
    else{

    }
}

function tempoMissao(){
    
}

function concluirMissao(){
    if(getComputedStyle(missao1).display == 'block'){
        missao1.style.display = 'none';
        missao2.style.display = 'block';
    }
    else if(getComputedStyle(missao2).display == 'block'){
        missao2.style.display = 'none';
        missao3.style.display = 'block';
    }
    else{
        
    }
}

// Trocar cenas


let cenasMissao1 = [
    document.getElementById('cena1_missao1'),
    document.getElementById('cena2_missao1'),
    document.getElementById('cena3_missao1')
];
let cenasMissao2 = [
    document.getElementById('cena1_missao2'),
    document.getElementById('cena2_missao2'),
    document.getElementById('cena3_missao2')
];
let cenasMissao3 = [
    document.getElementById('cena1_missao3'),
    document.getElementById('cena2_missao3'),
    document.getElementById('cena3_missao3')
];

let cena = 0;

function cenaDireita(){

    if(getComputedStyle(missao1).display == 'block'){
        for(let i = 0; i < cenasMissao1.length; i++){
            cenasMissao1[i].style.display = 'none';
        };
        cena++;
        if(cena >= cenasMissao1.length){
            cena = 0;
        }
        cenasMissao1[cena].style.display = 'block';
    }else if(getComputedStyle(missao2).display == 'block'){
        for(let i = 0; i < cenasMissao2.length; i++){
            cenasMissao2[i].style.display = 'none';
        };
        cena++;
        if(cena >= cenasMissao2.length){
            cena = 0;
        }
        cenasMissao2[cena].style.display = 'block';
    }else{
        for(let i = 0; i < cenasMissao3.length; i++){
            cenasMissao3[i].style.display = 'none';
        };
        cena++;
        if(cena >= cenasMissao3.length){
            cena = 0;
        }
        cenasMissao3[cena].style.display = 'block';
    }
}

function cenaEsquerda(){

    if(getComputedStyle(missao1).display == 'block'){
        for(let i = 0; i < cenasMissao1.length; i++){
            cenasMissao1[i].style.display = 'none';
        };
        cena--;
        if(cena < 0){
            cena = cenasMissao1.length - 1;
        }
        cenasMissao1[cena].style.display = 'block';
    }else if(getComputedStyle(missao2).display == 'block'){
        for(let i = 0; i < cenasMissao2.length; i++){
            cenasMissao2[i].style.display = 'none';
        };
        cena--;
        if(cena < 0){
            cena = cenasMissao2.length - 1;
        }
        cenasMissao2[cena].style.display = 'block';
    }else{
        for(let i = 0; i < cenasMissao3.length; i++){
            cenasMissao3[i].style.display = 'none';
        };
        cena--;
        if(cena < 0){
            cena = cenasMissao3.length - 1;
        }
        cenasMissao3[cena].style.display = 'block';
    }
}