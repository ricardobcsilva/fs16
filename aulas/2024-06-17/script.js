
//    <script>
//       alert(10+5-5)
//        alert("Hello World1")
//        alert('Hello world2')
//        alert(`Hello world3`)
//        alert(10)
//        alert(0.12)
//        alert(true)
//        alert(false)
//        alert(undefined)
//        alert(null)
//    </script>

//    <script>
//        var a = 3
//        var b = 5
//        alert(a+b)
//        alert(a-b)
//        alert(a*b)
//        alert(a/b)
//    </script>    

//    <script>
//        let a = 10  //mesmo efeito do var
//        const b = 2 //uma vez definida, o valor é constante
//        alert(a+b)
//    </script>
    
//    <script>
//        let n1
//        let n2
//        n1 = +prompt("Escreva um numero") //adicionando + antes do prompt, ele transforma texto do prompt em numero
//        n2 = +prompt("Escreve um numero")
//        alert(n1+n2) //prompt sempre retorna em texto, nao executa a operacao matematica
//    </script>
//    -->

let nome1
        let idade2
        nome1 = prompt("Qual seu nome")
        idade2 = prompt("Qual sua idade")
//        alert("Seu nome é " +nome1+ "\nSua idade é " +idade2) //Incluindo com concatenacao as variaveis no alert.
        alert(`Seu nome é ${nome1} e sua idade é ${idade2}`) //Com crase no alert cria-se um TEMPLATESTRING, onde pode-se declarar as variaveis entre ${} e serem interpretadas.
