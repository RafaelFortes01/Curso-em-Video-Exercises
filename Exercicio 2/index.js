const anoNascimento = document.getElementById("anoNascimento")  
const imagem = document.getElementById("imagemPrincipal")
const paragrafoResultado = document.getElementById("paragrafoResultado")
const data = new Date()
const ano = data.getFullYear()


function clique() {
    let sexo = document.querySelector("input[name='sexo']:checked")
    let anoNascimentoValue = parseInt(anoNascimento.value)
    console.log(sexo)

    if(!sexo || isNaN(anoNascimentoValue) || anoNascimentoValue > ano || anoNascimentoValue < 1900) {
        paragrafoResultado.innerText = "Dados inválidos!"
        
    }else {
        paragrafoResultado.innerText = "Dados válidos!"
    }
}