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

let missao1 = document.getElementById('missao1');
let missao2 = document.getElementById('missao2');
let missao3 = document.getElementById('missao3');

function cenaDireita(){
    let cena1;
    let cena2;
    let cena3;

    if(missao1.style.display == 'block'){
        cena1 = document.getElementById('cena1_missao1');
        cena2 = document.getElementById('cena2_missao1');
        cena3 = document.getElementById('cena3_missao1');

        if(cena1.style.display == 'block'){
            cena1.style.display = 'none';
            cena2.style.display = 'block';
        }else if(cena2.style.display == 'block'){
            cena2.style.display = 'none';
            cena3.style.display = 'block';
        }else{
            cena3.style.display = 'none';
            cena1.style.display = 'block';
        }
    }else if(missao2.style.display == 'block'){
        cena1 = document.getElementById('cena1_missao2');
        cena2 = document.getElementById('cena2_missao2');
        cena3 = document.getElementById('cena3_missao2');
    }else{
        cena1 = document.getElementById('cena1_missao3');
        cena2 = document.getElementById('cena2_missao3');
        cena3 = document.getElementById('cena3_missao3');
    }
}

function cenaEsquerda(){
    let cena1;
    let cena2;
    let cena3;

    if(missao1.style.display == 'block'){
        cena1 = document.getElementById('cena1_missao1');
        cena2 = document.getElementById('cena2_missao1');
        cena3 = document.getElementById('cena3_missao1');

        if(cena1.style.display == 'block'){
            cena1.style.display = 'none';
            cena3.style.display = 'block';
        }else if(cena2.style.display == 'block'){
            cena3.style.display = 'none';
            cena2.style.display = 'block';
        }else{
            cena2.style.display = 'none';
            cena1.style.display = 'block';
        }
    }else if(missao2.style.display == 'block'){
        cena1 = document.getElementById('cena1_missao2');
        cena2 = document.getElementById('cena2_missao2');
        cena3 = document.getElementById('cena3_missao2');
    }else{
        cena1 = document.getElementById('cena1_missao3');
        cena2 = document.getElementById('cena2_missao3');
        cena3 = document.getElementById('cena3_missao3');
    }
}