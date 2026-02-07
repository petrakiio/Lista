const msg = document.getElementById("mensagem")
const lista = document.getElementById("listaTarefas")
const btn = document.getElementById("adcTarefa")

function criarTarefa(tarefa) {
    let li = document.createElement("li")
    li.textContent = tarefa
    lista.appendChild(li)
}

btn.addEventListener("click", function() {
    let tarefa = document.getElementById('input-tarefa').value.trim()
    if (tarefa === ""){
        msg.textContent = "Por favor, insira uma tarefa."
        msg.className="error"
    }else{
        criarTarefa(tarefa)
        msg.textContent = "Tarefa adicionada com sucesso!"
        msg.className="pass"
        document.getElementById('input-tarefa').value = ""
    }
})