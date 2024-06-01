const incrementar = document.getElementById('1')
const zerar = document.getElementById('2')
const texto = document.getElementById('3')

let cliques = 0

incrementar.addEventListener('click', ()=>{
    
    cliques++

    texto.textContent = `O contador está com ${cliques} cliques`
})

zerar.addEventListener('click', ()=>{

    cliques = 0
    
    texto.textContent = ''
})



console.log(incrementar)
console.log(zerar)
console.log(cliques)