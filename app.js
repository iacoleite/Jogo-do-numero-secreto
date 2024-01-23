/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/
// let palavraTentativa = '';
let numerosSorteados = [];
tentativas = 0;
numerosTotais = 100;

function geraNumeroAleatorio() {
    numeroEscolhido = parseInt(Math.random() * numerosTotais + 1);
    let quantidadeNumeroSorteados = numerosSorteados.length;
    if (quantidadeNumeroSorteados == numerosTotais) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio(); 
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
        
    }  
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function resetar() {
    exibirMensagemInicial();
    limparCampo();
    numeroSecreto = geraNumeroAleatorio();
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);    
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

resetar();

function verificarChute() {
    tentativas++;
    console.log(numeroSecreto);
    chute = parseInt(document.querySelector('input').value);
    numeroSecreto == chute ? console.log('acertou') : console.log('errou');
    //(tentativas == 1) ? palavraTentativa = 'tentativa' : palavraTentativa = 'tentativas';
    let palavraTentativa = (tentativas == 1) ? 'tentativa': 'tentativas';
    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'Parabéns! você acertou!');
        let mensagemTentativas = `O número secreto é ${numeroSecreto} e você descobriu em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        mensagemNumeroMenor = `O número secreto é menor que ${chute}.`;
        mensagemNumeroMaior = `O número secreto é maior que ${chute}.`;
        (chute > numeroSecreto) ? exibirTextoNaTela('p', mensagemNumeroMenor) : exibirTextoNaTela('p', mensagemNumeroMaior); 
        limparCampo();
    }
}


/* DESAFIOS

function saudacaoPadrao() {
    console.log('Olá, mundo!');
}

function saudacaoNome(nome) {
    console.log('Olá,' + nome);
}

function duplica(numeroSimples) {
    return (numeroSimples * 2);
}

function media(a, b, c) {
    return ((a + b + c) / 3);
}

function maiorNumero(a, b) {
    return (a > b) ? a : b;
    }

/*{
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


function quadrado(a) { return a * a } 


function imc(altura, peso) {
    indice = peso / (Math.pow(altura, 2));
    //indice = peso / (altura * altura);
    return indice;
}

function fatorial(numero) {
    if (numero == 0) {
        return 1
    } else { 
    resultado = 1;
    while (numero > 0) {
    resultado = resultado * numero;
    numero--;
        }
    return resultado;
    }
}
function converteDolar(dolar) {
    precoDolar = 4.80;
    resultado = dolar * precoDolar;
    return resultado.toFixed(2);
}

function areaSalaRetangular(x, y) {
    areaTotal = x * y;
    perimetroTotal = (2 * x) + (2 * y);
    console.log(`A área é ${areaTotal} e o perímetro é ${perimetroTotal}`);
    return areaTotal, perimetroTotal;
}

function areaRedonda(raio) {
    pi = 3.14;
    perimetroSalaRedonda = 2 * raio * pi;
    areaSalaRedonda = pi * Math.pow(raio, 2);
    console.log(`A área é ${areaSalaRedonda} e o perímetro é ${perimetroSalaRedonda}`);
}

function tabuada(numero) {
    i = 0;
    while (i <= 10) {
        resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
        i++
    }
}


let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

let listaNomes = ['Caio', 'Iaco', 'Oiac'];
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[2]);
*/