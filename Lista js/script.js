const btnAdicionar = document.getElementById('adcTarefa')
const mensagem = document.getElementById('mensagem')
const inputTarefa = document.getElementById('input-tarefa')
const listaTarefas = document.getElementById('listaTarefas')
const container = document.querySelector('.container')
const tarefas = []

btnAdicionar.addEventListener('click', () => {
    const tarefa = inputTarefa.value.trim()

    if (tarefa === '') {
        setMensagem('Digite uma tarefa para adicioná-la a sua lista!', 'erro')
    } else {
        setMensagem('Tarefa adicionada com sucesso!', 'pass')
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ''
})

function renderizarTarefas() {
    listaTarefas.innerHTML = ''

    tarefas.forEach((tarefa, indice) => {
        const novaTarefa = document.createElement('li')
        novaTarefa.textContent = tarefa
        novaTarefa.appendChild(criarBotaoRemover(indice))
        novaTarefa.appendChild(criarBotaoEditar(indice))
        listaTarefas.appendChild(novaTarefa)
    })

    if (tarefas.length === 3) {
        criarBotaoLimpar()
    }
}

function criarBotaoRemover(indice) {
    return criarBotao('Remover', 'remover', () => removerTarefa(indice))
}

function criarBotaoEditar(indice) {
    return criarBotao('Editar', 'editar', () => editarTarefa(indice))
}

function criarBotaoLimpar() {
    if (document.querySelector('.botao_lista')) return

    const btn = criarBotao('Esvaziar lixeira', 'botao_lista', esvaziar)
    container.appendChild(btn)
}

function esvaziar() {
    tarefas.length = 0
    setMensagem('Lista limpa', 'pass')
    const btn = document.querySelector('.botao_lista')
    if (btn) btn.remove()
    renderizarTarefas()
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1)
    renderizarTarefas()
}

function editarTarefa(indice) {
    const entrada = prompt('Edite a sua tarefa')
    if (entrada === null) return

    const tarefaEditada = entrada.trim()
    if (tarefaEditada === '') {
        setMensagem('Coloque um novo nome pra editar!', 'erro')
    } else {
        tarefas[indice] = tarefaEditada
        renderizarTarefas()
    }
}

function setMensagem(texto, classe) {
    mensagem.textContent = texto
    mensagem.className = classe
}

function criarBotao(texto, classe, onClick) {
    const botao = document.createElement('button')
    botao.textContent = texto
    botao.className = classe
    botao.onclick = onClick
    return botao
}
