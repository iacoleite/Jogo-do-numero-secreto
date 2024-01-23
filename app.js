
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
        // console.log(numerosSorteados);
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
    // console.log(numeroSecreto);
    chute = parseInt(document.querySelector('input').value);
    // numeroSecreto == chute ? console.log('acertou') : console.log('errou');
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

