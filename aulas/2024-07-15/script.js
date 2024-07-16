function perguntarNome () {

        let nome = prompt("Qual seu nome");
        alert("Então seu nome é " +nome);
}

function somar(primeiro, segundo){
    let soma = primeiro + segundo;
    alert(soma);
}

//function perguntaDoisNumeroESoma (){
//    let primeiro = prompt("Digite o primeiro numero");
//    let segundo = prompt("Digite o segundo numero");
//
//    let soma = parseInt(primeiro) + parseInt(segundo); //utilizar parseInt para "passar" o numero recebido em inteiro e assim ser interpretada a soma
//    alert("O resultado é "+soma);
//}

//somar(10,6);

        //prompt("Qual sua idade")
//        alert("Seu nome é " +nome1+ "\nSua idade é " +idade2) //Incluindo com concatenacao as variaveis no alert.
//        alert(`Seu nome é ${nome1} e sua idade é ${idade2}`) //Com crase no alert cria-se um TEMPLATESTRING, onde pode-se declarar as variaveis entre ${} e serem interpretadas.

function somar(primeiro, segundo) {
    let soma = Number(primeiro) + Number(segundo);
  
    return soma;
  }
  
  function perguntarDoisNumerosESomar() {
    let primeiro = prompt("digite");
    let segundo = prompt("digite");
  
    let soma = somar(primeiro, segundo);
  
    alert(soma);
  }
  
  function adicionarSaldo(valor) {
    let saldo = 1000;
  
    saldo = somar(saldo, valor);
  
    alert(saldo);
  }

  function mudarCor() {
  let cor = prompt("Digite a cor");
  let body = window.document.body;

  body.style.background = cor;
  }