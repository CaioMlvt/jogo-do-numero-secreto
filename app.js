let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTenxoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNalista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }  else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
 
 
function exibirMensagemInicial() {
    exibirTenxoNaTela('h1','Jogo do número secreto');
    exibirTenxoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTenxoNaTela('h1','Parabéns você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns você acertou em [${tentativas}], ${palavraTentativa}`;
        exibirTenxoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else{
        if (chute > numeroSecreto){
            exibirTenxoNaTela('p', 'O número é menor');
        
        } else (exibirTenxoNaTela('p','O número é maior'));
    tentativas++  
    limparCampo();
    }  
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;    
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // //

