
//Adicionar TAG HTML
function adicionarTag () {
    document.body.innerHTML  = document.body.innerHTML + "<h2>Teste</h2>"
}


//Adicionar texto informado no prompt dentro do H2 
function informarTexto() {
    let texto = prompt ("Informar texto");
    document.body.innerHTML = document.body.innerHTML + "<h2>"+texto+"</h2>";

}

