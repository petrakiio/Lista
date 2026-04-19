import { Insert } from "../../controller/cadastro.js";

function GetValues() {
    return {
        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value.trim(),
        email: document.getElementById("email").value.trim()
    };
}

function ShowMessage(message) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = message;
}

function Create(result) {
    if (result === false) {
        ShowMessage("Erro ao inserir os dados!");
    } else {
        window.location.href = "./login.html";
    }
}

function Main() {
    const values = GetValues();

    if (!values.name || !values.age || !values.email) {
        ShowMessage("Preencha todos os campos.");
        return;
    }

    const result = Insert(values.name, values.age, values.email);
    Create(result);
}

document.getElementById("btn").addEventListener("click", Main);
