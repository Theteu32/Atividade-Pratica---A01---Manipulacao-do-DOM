const botao = document.getElementById("botao")
const texto = document.getElementById("texto")

botao.addEventListener('click', ()=>{

    let imput = prompt("Digite seu nome:")

    texto.textContent = `E aí ${imput} Você está deixando o seu site dinâmico.`
})


// console.log(botao)
// console.log(texto) 