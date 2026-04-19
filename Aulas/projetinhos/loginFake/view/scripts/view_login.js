import { Login } from "../../controller/login";

function GetValeus(){
    return {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value
    }
}

function sleep() {
    setTimeout(() => {
        console.log('Esperando')
    }, 10000);
}


function Create(result){
    if (result === false){
        const h2 = document.createElement('h2');
        h2.textContent='Usuario não encontrado!';
        sleep();
        h2.innerHTML='';
    }else{
        window.location.href='./index.html'
    }
}

function Main(){
    const values = GetValeus();
    const result = Login(values.name,values.email);
    Create(result);
}