let input;
const btn = document.getElementById('btn');

function GetValue(){
    input = document.getElementById('msg').value;
    return {msg:input};
};

function Create(msg){
    const div = document.createElement('div');
    const select = document.createElement('section');
    select.classList.add('chat-body')
    div.classList.add('message.sent');
    div.textContent=msg;
    select.appendChild(div);
};

function clear(){
    input = document.getElementById('msg');
    input.value='';
}

function Main(){
    console.log(GetValue())
    Create(GetValue());
    clear();
};

btn.addEventListener('click',Main);