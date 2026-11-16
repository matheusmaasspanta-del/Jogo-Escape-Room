let jogador = {
    chave: false,
    papelComCodigoMissao1: false, 
    codigoMissao1: null,
}

// Missão 1

let portaMissao1 = {
    fechada: true,
    aberta: false,
}

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
    if(jogador.chave == false){
        porta1.style.animation = "none";
        porta1.offsetHeight;
        porta1.style.animation = "animacaoPorta 0.1s";
    }else{
        portaMissao1.aberta = true;
        portaMissao1.fechada = false;
    }
}

function abrirBauMissao1(){
    let bau1Fechado = document.getElementById('bau1Fechado');
    let fechadura = document.getElementById('fechadura1');
    let visor = document.getElementById('visor');

    if(jogador.papelComCodigoMissao1 == false){
        bau1Fechado.style.animation = "none";
        bau1Fechado.offsetHeight;
        bau1Fechado.style.animation = "animacaoBau 0.1s";
    }else{
        fechadura.style.display = 'flex';
        
    }
}

// Trocar cenas

let missao1 = document.getElementById('missao1');
let missao2 = document.getElementById('missao2');
let missao3 = document.getElementById('missao3');

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