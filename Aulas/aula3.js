
const btnt = document.getElementById('adcTarefa')
let tarefas = []

btnt.addEventListener('click', () =>{
    const inputTarefa = document.getElementById("input-tarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

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

    let i = 0 
    for (i; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)
    }
}