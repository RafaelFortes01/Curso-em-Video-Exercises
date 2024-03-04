let data = new Date()
let horas = data.getHours()

console.log(horas)
// Alterar parágrafo com horário
const horario = document.getElementById("horario")

horario.innerText = `Agora são ${horas} horas`;

//Alterar fundo e a imagem - Tarde = rgba(53,47,73,255)
let bodyColor = document.body.style
let imagem = document.getElementById("imagemPrincipal")

if (horas >= 5 && horas <= 12) {
    bodyColor.backgroundColor = "rgb(236, 204, 162)"
    imagem.src = "../Exercicio 1/imagens/manhã.jpg"
}else if (horas >= 13 && horas <= 18) {
    bodyColor.backgroundColor = "rgba(53,47,73,255)"
    imagem.src = "../Exercicio 1/imagens/tarde.jpg"
}else {
    bodyColor.backgroundColor = "rgba(8,23,30,255)"
    imagem.src = "../Exercicio 1/imagens/noite.jpg"
}
