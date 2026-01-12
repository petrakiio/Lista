const tela = document.getElementById('contador')
let valor =0
const aviso = document.getElementById('aviso')

//botões
const Btnmenos = document.getElementById('menos')
const zerar = document.getElementById('zerar')
const Btnmais = document.getElementById('mais')
const Btnmais10 = document.getElementById('mais10')
const Btnmenos10 = document.getElementById('menos10')
//funções
function atualizar(){
    tela.textContent=valor
}
function limparMensagem(){
    aviso.textContent=''
}
//funções de adicionar,subtrair e zerar
Btnmais.addEventListener('click',() => {
    valor ++
    atualizar()
    limparMensagem()
})

Btnmenos.addEventListener('click', () =>{
    if (valor > 0){
        valor --
        atualizar()
        limparMensagem()
    }else{
        aviso.textContent='Você não pode subtrair o zero'
    }
})

Btnmais10.addEventListener('click', () =>{
    valor +=10
    atualizar()
    limparMensagem()
})

Btnmenos10.addEventListener('click', () =>{
    let previsao = valor
    previsao -= 10
    if (previsao <= 0){
        aviso.textContent='Não é viavel a subtração'
    }else{
        valor -= 10
        atualizar()
        limparMensagem()
    }
})

zerar.addEventListener('click', () =>{
    if (valor === 0){
       aviso.textContent='O contador já está zerado'
    }else{
        valor = 0
        atualizar()
        limparMensagem()
    }
})