const btn = document.getElementById('btn');
const input = document.getElementById('msg');
const chatBody = document.querySelector('.chat-body');

function getValue() {
    return input.value.trim();
}

function createMessage(msg) {
    const div = document.createElement('div');
    div.classList.add('message', 'sent');
    div.textContent = msg;
    chatBody.appendChild(div);
}

function clearInput() {
    input.value = '';
}

function main() {
    const msg = getValue();

    if (!msg) {
        return;
    }

    createMessage(msg);
    clearInput();
}

btn.addEventListener('click', main);
