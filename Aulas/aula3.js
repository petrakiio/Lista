//mini lista de tarefas

function adicionarTarefa(){
    const input = document.getElementById('input-tarefa')
    const tarefa = input.value
    const paragrafo = document.getElementById('mensagem')
    if (tarefa === ''){
        paragrafo.textContent='Erro,Não é possivel adicionar uma tarefa vazia'
        paragrafo.className='erro'
        
    }else{
        paragrafo.textContent='Tarefa Adicionada:'+tarefa
        paragrafo.className='coreto'
        let Listatarefas = document.getElementById('listaTarefas')
        //cria elemento li
        let novaTarefa = document.createElement('li')
        
        //Adicionando valor do input
        novaTarefa.textContent=tarefa

        //Adiciona como filho
        Listatarefas.appendChild(novaTarefa)

        tarefa.value = ''
    }
}
