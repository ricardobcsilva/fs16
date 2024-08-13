//let frutas
//let insereFruta = prompt ("Diga uma fruta");


//frutas = [
//    "<li>abacate</li>", 
//    "<li>banana</li>", 
//    "<li>caju</li>",
//    "<li>uva</li>",
//    "<li>maracuja</li>",
//    [frutasn]  
//    ];

   // frutas = [
  //      "abacate", 
    //    "banana", 
      //  "caju",
        //"uva",
        //"maracuja",
        //[insereFruta]  
        //];

    //document.body.innerHTML += frutas[0];
    //document.body.innerHTML += frutas[1];
    //document.body.innerHTML += frutas[2];
    //document.body.innerHTML += frutas[3];
    //document.body.innerHTML += frutas[4];
    //document.body.innerHTML += frutas[5];

    //console.log(frutas);



function adicionarFruta () {
    let novaFruta;
    novaFruta = prompt ("Poderia informar uma fruta");
    novaFruta = "<li>" + novaFruta + "</li>";

    frutas.push(novaFruta);
    atualizarListaFrutas();
}

function atualizarListaFrutas() {

    let listaUL = document.getElementById("lista");
    listaUL.innerHTML = "";

    for (let posicao = 0; posicao < frutas.length; posicao++) {
        listaUL.innerHTML += frutas[posicao];
    }       
}

let frutas;
frutas = [];
atualizarListaFrutas();


function apagarUltimo () {
    frutas.pop();

}