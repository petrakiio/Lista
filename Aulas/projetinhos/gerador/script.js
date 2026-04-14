import { gerarSenha } from "./gerador.js";

function Main() {
  const app = document.getElementById("app");

  const input = document.createElement("input");
  input.id = "senha";
  input.type = "text";
  input.readOnly = true;
  input.placeholder = "Clique em gerar";

  const btnGerar = document.createElement("button");
  btnGerar.textContent = "Gerar senha";

  const btnCopiar = document.createElement("button");
  btnCopiar.textContent = "Copiar";

  const status = document.createElement("p");
  status.id = "status";

  app.appendChild(input);
  app.appendChild(btnGerar);
  app.appendChild(btnCopiar);
  app.appendChild(status);

  btnGerar.addEventListener("click", () => {
    input.value = gerarSenha();
    status.textContent = "";
  });

  btnCopiar.addEventListener("click", async () => {
    if (!input.value) {
      status.textContent = "Gere uma senha primeiro.";
      return;
    }
    try {
      await navigator.clipboard.writeText(input.value);
      status.textContent = "Senha copiada!";
    } catch (err) {
      status.textContent = "Nao foi possivel copiar.";
    }
  });
}

document.addEventListener("DOMContentLoaded", Main);
