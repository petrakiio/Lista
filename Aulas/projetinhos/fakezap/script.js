let input;
const btn = document.getElementById('btn');

function GetValue(){
    input = document.getElementById('msg').value;
    return {msg:input};
};

function Create(msg){
    const div = createElement('div');
    div.classList.add('message sent');
    div.textContent=msg;
};

function Main(){
    Create(GetValue());
};

btn.addEventListener('click',Main);