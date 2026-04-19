import { Insert } from "../../controller/cadastro";

function GetValeus(){
    return {
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
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
        h2.textContent='Erro ao inserir os dados!';
        sleep();
        h2.innerHTML='';
    }else{
        window.location.href='./login.html'
    }
}

function Main(){
    const values = GetValeus();
    const result = Insert(values.name,values.age,values.email);
    Create(result);
}

document.getElementById('')