//Dados de saida
const soma = document.getElementById('soma')
const maior = document.getElementById('maior')
const menor = document.getElementById('menor')
const aviso = document.getElementById('aviso')
const quantidade = document.getElementById('qtd')

//Dados de entrada/processamento
const btn  = document.getElementById('adicionar')
const ul = document.getElementById('lista')
const numeros = []


//Funções

function atualizar_aviso(){
    aviso.textContent=''    
}

function atualizar_tela(){
    quantidade.textContent=numeros.length
    atualizar_aviso()
}



function somar(){
    let valor = 0
    for (let n of numeros){
        valor += n 
    }
    soma.textContent=valor
    atualizar_aviso()
}

function maior_n(){
    if (numeros.length > 0){
        const maior_numero = Math.max(...numeros)
        maior.textContent=maior_numero
    }
}

function menor_n(){
    if (numeros.length > 0) {
        const menor_numero = Math.min(...numeros);
        menor.textContent = menor_numero;
    }
}

btn.addEventListener('click', ()=>{
     const inputFild = document.getElementById('numero')
     const input = inputFild.value
    const valor = Number(input)
    if (input === ''){
        aviso.className='erro'
        aviso.textContent='Preencha os campos!'
    }else{
        if (numeros.includes(valor)){
            aviso.className='erro'
            aviso.textContent='Esse numero já está na lista!'
        }else{
            const li = document.createElement('li')
            li.textContent=valor
            ul.appendChild(li)
            numeros.push(valor)
            maior_n()
            menor_n()
            atualizar_tela()
            somar()
            inputFild.value=''
            inputFild.focus()
            aviso.className='pass'
            aviso.textContent='Adicionado com sucesso!'
        }
    }
})