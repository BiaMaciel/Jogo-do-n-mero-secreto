let listaNumberSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumberoAleatorio();
let tentativas = 1;


//CRIANDO FUNÇÃO //FUNÇÃO COM PARAMETRO/SEM RETORNO

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3})
};

function exibirMsnInicial(){
    exibirTextoTela('h1', 'Jogo do número secreto')
exibirTextoTela('p',  'Escolha um número entre 1 e 10')
}

//EXECUTANDO A FUNÇÃO 
exibirMsnInicial();

////////////////////////////////////////////////

function verificarChute() {

    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){

        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto){
            exibirTextoTela('p', 'O número secreto é menor');
        }else {
            exibirTextoTela('p', 'O número secreto é maior');
        }

        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo()
        
    }
}


//FUNÇÕES DE RETORNO //FUNÇÃO SEM PARAMETROS/COM RETORNO
function gerarNumberoAleatorio(){
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

 let quantidadeElementosLista = listaNumberSorteado.length;

 if(quantidadeElementosLista == numeroLimite) {
    listaNumberSorteado = [];
 };


 if (listaNumberSorteado.includes(numeroEscolhido)){
    return gerarNumberoAleatorio()
 } else {
    listaNumberSorteado.push(numeroEscolhido);
    console.log(listaNumberSorteado)
    return numeroEscolhido;
 }
};

////////////////////////////////////////////////

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

////////////////////////////////////////////////

function reiniciarJogo(){
    
    numeroSecreto = gerarNumberoAleatorio();
    limparCampo();
    
    tentativas = 1;
   
    exibirMsnInicial();

   document.getElementById('reiniciar').setAttribute('disabled',true);
}
