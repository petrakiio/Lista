import { gerarSenha } from "./gerador";

function Layout(){
    const password = gerarSenha();
    const p = document.createElement('p')
    p.textContent=`You password:${password}`;
}

function Main(){
    const btn = document.createElement('button'); 
    btn.textContent = "Click Here";
    document.body.appendChild(btn);

    document.querySelector('button').addEventListener('click',()=>{
        
    });
}


document.addEventListener('DOMContentLoaded',Main);

