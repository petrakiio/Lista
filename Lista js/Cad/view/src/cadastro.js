const div = document.querySelector(".content");
const form = document.getElementById("cadastro-form");

function getvalue() {
    return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
}

function limparMensagemAnterior() {
    const mensagem = document.querySelector(".pass, .err");
    if (mensagem) {
        mensagem.remove();
    }
}

function validationSaida(v) {
    limparMensagemAnterior();

    const p = document.createElement("p");

    if (v) {
        p.className = "pass";
        p.textContent = "Conta criada!";
    } else {
        p.className = "err";
        p.textContent = "Erro ao criar conta";
    }

    div.appendChild(p);
}

async function main(event) {
    event.preventDefault();

    const values = getvalue();
    const response = await fetch("/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    });

    if (response.ok) {
        validationSaida(true);
        form.reset();
        return;
    }
    validationSaida(false);
}

form.addEventListener("submit", main);
