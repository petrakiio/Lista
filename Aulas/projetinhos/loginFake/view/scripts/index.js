import { User } from "../../model/model.js";

function RenderUser() {
    const userId = localStorage.getItem("loggedUserId");
    const content = document.getElementById("content");

    if (!userId) {
        content.innerHTML = "<p>Nenhum usuario foi encontrado. Faca login novamente.</p>";
        return;
    }

    const user = User.getById(userId);

    if (!user) {
        content.innerHTML = "<p>Usuario nao encontrado. Faca login novamente.</p>";
        return;
    }

    content.innerHTML = `
        <h1>Bem-vindo, ${user.name}!</h1>
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Idade:</strong> ${user.age}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;
}

document.addEventListener("DOMContentLoaded", RenderUser);
