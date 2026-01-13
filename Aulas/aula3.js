
const btnt = document.getElementById('adcTarefa')
const btnL = document.getElementById('limpar')
const mensagem = document.getElementById("mensagem")
let tarefas = []

btnt.addEventListener('click', () =>{
    const inputTarefa = document.getElementById("input-tarefa")
    let tarefa = inputTarefa.value.trim()



    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
        mensagem.className='erro'
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.className='pass'
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
})

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (let i = 0 ; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        //botão de remover
        const removebtn = document.createElement('button')
        removebtn.textContent='Remover'
        removebtn.className='remover'
        removebtn.onclick= () => removertarefa(i) //arrow function
        novaTarefa.appendChild(removebtn)
        //botão de editar
        const editorbtn = document.createElement('button')
        editorbtn.textContent='Editar'
        editorbtn.className='editar'
        editorbtn.onclick = () => editartarefa(i)
        novaTarefa.appendChild(editorbtn)
        listaTarefas.appendChild(novaTarefa)
    }
}

btnL.addEventListener('click', () =>{
    if (tarefas.length === 0){
        mensagem.textContent='Você não pode apagar algo vazio'
        mensagem.className='erro'
    }else{
        tarefas.length = 0
        mensagem.textContent='Lista esvaziada'
        mensagem.className='pass'
        renderizarTarefas()
    }
})


function removertarefa(indice){
    tarefas.splice(indice, 1)
    renderizarTarefas()
}
function editartarefa(indece){
    const tarefaEditada = prompt('Edite a sua tarefa').trim()
    if (tarefaEditada === ''){
        mensagem.textContent='Coloque um novo nome pra editar!'
        mensagem.className='erro'
    }else{
        tarefas[indece] = tarefaEditada
        renderizarTarefas()
    }
}