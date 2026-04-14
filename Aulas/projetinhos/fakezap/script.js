const { createElement } = require("react");

let input;
const btn = document.getElementById('btn');

function Create(msg){
    const div = createElement('div');
    div.classList.add('message sent');
}