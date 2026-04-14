let input;
const btn = document.getElementById('btn');

function GetValue(){
    input = document.getElementById('msg').value;
    return {msg:input};
};

function Create(msg){
    const div = document.createElement('div');
    div.classList.add('message sent');
    div.textContent=msg;
};

function clear(){
    input = document.getElementById('msg');
    input.value=0;
}

function Main(){
    Create(GetValue());
    clear();
};

btn.addEventListener('click',Main);