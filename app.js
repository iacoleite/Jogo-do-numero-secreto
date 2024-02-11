
// variables
let numerosSorteados = [];
let tentativas = 0;
let numerosTotais = 100;

// random number generator
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
    return numeroEscolhido;
        
    }  
}

// display text
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

// clean input field
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// new game
function resetar() {
    exibirMensagemInicial(); // show welcome messages
    limparCampo(); // clean input
    numeroSecreto = geraNumeroAleatorio(); // set a new random number
    tentativas = 0; //reset number of tries
    document.getElementById('reiniciar').setAttribute('disabled', true); // disable new game button
    document.getElementById('verificador').disabled = false; // enable verify input button
}

// display welcome messages
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numerosTotais}`);
}

// start a new game
resetar();

// verify if input number is equal to random number set with a new game
function verificarChute() {
    tentativas++; // add 1 to number of tries
    chute = parseInt(document.querySelector('input').value); // get input
    let palavraTentativa = (tentativas == 1) ? 'tentativa': 'tentativas'; // display the correct word for singular or plural number tries
    if (numeroSecreto == chute) {  // compare the input with the random number
        exibirTextoNaTela('h1', 'Parabéns! você acertou!'); // display 'win' message if input equals to random number
        let mensagemTentativas = `O número secreto é ${numeroSecreto} e você descobriu em ${tentativas} ${palavraTentativa}!`; // set the message to display the secret number and the number of tries
        exibirTextoNaTela('p', mensagemTentativas); // display message about number and number of tries
        document.getElementById('reiniciar').removeAttribute('disabled'); // enable button to reset the game
        document.getElementById('verificador').disabled = true; // disable button to verify number, enabled when reset the game

    } else {
        // show messages if the input number is greater than or less than the random number
        mensagemNumeroMenor = `O número secreto é menor que ${chute}.`;
        mensagemNumeroMaior = `O número secreto é maior que ${chute}.`;
        (chute > numeroSecreto) ? exibirTextoNaTela('p', mensagemNumeroMenor) : exibirTextoNaTela('p', mensagemNumeroMaior); 
        limparCampo();
    }
}

