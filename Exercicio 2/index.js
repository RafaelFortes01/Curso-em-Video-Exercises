const anoNascimento = document.getElementById("anoNascimento")  
const imagem = document.getElementById("imagemPrincipal")
const paragrafoResultado = document.getElementById("paragrafoResultado")
const data = new Date()
const ano = data.getFullYear()


function clique() {
    let sexo = document.querySelector("input[name='sexo']:checked")
    let anoNascimentoValue = parseInt(anoNascimento.value)
    let idade = ano - anoNascimentoValue

    if(!sexo || isNaN(anoNascimentoValue) || anoNascimentoValue > ano || anoNascimentoValue < 1900) {
        paragrafoResultado.innerText = "Dados inválidos!"
        
    }else {
        
        if(sexo.value == "masculino"){
            imagem.classList.add("redimensionarImagem");
            paragrafoResultado.innerText = `Detectamos um homem de ${idade} anos!`

            if(idade >= 0 && idade <= 5) {
                imagem.src="./imagens/masculino/bebe.jpg"
            }else if (idade >= 6 && idade <= 12) {
                imagem.src="./imagens/masculino/criança.jpg"
            }else if (idade >= 13 && idade <= 20) {
                imagem.src="./imagens/masculino/adolescente.jpg"
            }else if (idade >= 21 && idade <= 59) {
                imagem.src="./imagens/masculino/adulto.jpg"
            }else {
                imagem.src="./imagens/masculino/idoso.jpg"
            }
        }else if (sexo.value == "feminino") {
            imagem.classList.add("redimensionarImagem");
            paragrafoResultado.innerText = `Detectamos uma mulher de ${idade} anos!`

            if(idade >= 0 && idade <= 5) {
                imagem.src="./imagens/feminino/bebe.jpg"
            }else if (idade >= 6 && idade <= 12) {
                imagem.src="./imagens/feminino/criança.jpg"
            }else if (idade >= 13 && idade <= 20) {
                imagem.src="./imagens/feminino/adolescente.jpg"
            }else if (idade >= 21 && idade <= 59) {
                imagem.src="./imagens/feminino/adulta.jpg"
            }else {
                imagem.src="./imagens/feminino/idosa.jpg"
            }
        }
    }
}