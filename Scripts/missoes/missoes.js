let jogador = {
    concluirMissao1: false,
    concluirMissao2: false,
    concluirMissao3: false,
    
    chave: false,
    papelComCodigoMissao1: false, 
    codigoMissao1: null,

    portaDestrancada: false,
    teclas: null,
    codigoMissao2: null,

    obsidians: 0,
}

let minutos = 0;
let segundos = 0;
let intervaloRelogio;
let relogio = document.getElementById('relogio');

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

// missão 2

function abrirPortaMissao2(){
    let porta2 = document.getElementById('porta2');
    let porta2Aberta = document.getElementById('porta2Aberta');
    if(jogador.portaDestrancada == false){
        porta2.style.animation = "none";
        porta2.offsetHeight;
        porta2.style.animation = "animacaoPorta 0.1s";
    }
}

function digitarFechadura(){
    document.getElementById('fechadura2Selecionada').style.display = 'flex';
}
function confirmarCodigoMissao2(){
    let fechadura = document.getElementById('fechadura2Selecionada');
    let visor = document.getElementById('visorMissao2');
    let porta = document.getElementById('porta2');
    let portaAberta = document.getElementById('porta2Aberta');
    if(visor.value == jogador.codigoMissao2){
        fechadura.style.display = 'none';
        porta.style.display = 'none';
        portaAberta.style.display = 'block';
        document.getElementById('fechadura2').style.display = 'none';
    }else{
        fechadura.style.animation = 'none';
        fechadura.offsetHeight;
        fechadura.style.animation = 'animacaoFechadura 0.1s';
    }
}

let teclas = ['teclasC7M', 'teclasDm7', 'teclasG7'];

function gerarCombinacaoTeclas(){
    let tecla = Math.floor(Math.random() * 3);

    return teclas[tecla];
}

function iniciarCombinacaoTeclas(){
    if(jogador.teclas == null){
        jogador.teclas = gerarCombinacaoTeclas();
    }
}

function mostrarTeclas(){
    iniciarCombinacaoTeclas();
    let combinacaoTeclas = jogador.teclas;

    if(combinacaoTeclas == 'teclasC7M'){
        document.getElementById('teclasC7M').style.display = 'block';
        jogador.codigoMissao2 = 'C7M';
    }else if(combinacaoTeclas == 'teclasDm7'){
        document.getElementById('teclasDm7').style.display = 'block';
        jogador.codigoMissao2 = 'Dm7';
    }else{
        document.getElementById('teclasG7').style.display = 'block';
        jogador.codigoMissao2 = 'G7';
    }

    document.getElementById('teclas').style.display = 'block';
}

// geral

function avancarMissao(){
    let concluir;
    if(getComputedStyle(missao1).display == 'block'){
        pararRelogio();
        let tempoTotal = (minutos * 60) + segundos;


        concluir = document.getElementById('conclusaoMissao1');
        concluir.style.display = 'block';
        jogador.concluirMissao1 = true;
        document.getElementById('tempoFinalMissao1').innerHTML = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2,'0')}`;
        
        let obsidian1 = document.getElementById('obsidian1Missao1');
        let obsidian2 = document.getElementById('obsidian2Missao1');
        let obsidian3 = document.getElementById('obsidian3Missao1');
        
        obsidian1.style.display = 'block';
        obsidian2.style.display = 'block';
        obsidian3.style.display = 'block';
        
        if(tempoTotal >= 25 && tempoTotal <= 50){
            obsidian3.style.display = 'none';
            jogador.obsidians += 2;
        }else if(tempoTotal > 50){
            obsidian2.style.display = 'none';
            obsidian3.style.display = 'none';
            jogador.obsidians += 1;
        }else{
            jogador.obsidians += 3;
        }
    }
    else if(getComputedStyle(missao2).display == 'block'){
        jogador.concluirMissao2 = true;
        let tempoTotal = (minutos * 60) + segundos;
    }
    else{
        jogador.concluirMissao3 = true;
        let tempoTotal = (minutos * 60) + segundos;

    }
}


function tempoMissao(){
    segundos++;
    if(segundos >= 60){
        segundos = 0;
        minutos++;
    }

    let s = String(segundos).padStart(2, '0');
    let m = String(minutos).padStart(2, '0');

    relogio.innerHTML = `${m}:${s}`;
}

function iniciarRelogio(){
    intervaloRelogio = setInterval(tempoMissao, 1000);
}
function pararRelogio(){
    intervaloRelogio = clearInterval(intervaloRelogio);
}

function resetarRelogio(){
    clearInterval(intervaloRelogio);
    minutos = 0;
    segundos = 0;

    relogio.innerHTML = '00:00';
    iniciarRelogio();
}

function concluirMissao(){
    if(getComputedStyle(missao1).display == 'block'){
        missao1.style.display = 'none';
        missao2.style.display = 'block';
        document.getElementById('cena1_missao2').style.display = 'block';
        resetarRelogio();
    }
    else if(getComputedStyle(missao2).display == 'block'){
        missao2.style.display = 'none';
        missao3.style.display = 'block';
        resetarRelogio();
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

iniciarRelogio();