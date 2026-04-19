import { Login } from "../../controller/login.js";

function GetValues() {
    return {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim()
    };
}

function ShowMessage(message) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = message;
}

function Create(result) {
    if (result === false) {
        ShowMessage("Usuario nao encontrado!");
    } else {
        localStorage.setItem("loggedUserId", String(result));
        window.location.href = "./index.html";
    }
}

function Main() {
    const values = GetValues();

    if (!values.name || !values.email) {
        ShowMessage("Preencha nome e email.");
        return;
    }

    const result = Login(values.name, values.email);
    Create(result);
}

document.getElementById("btn").addEventListener("click", Main);
