import { CreateUser } from "../../controller/cadastroController";

const div = document.querySelector('.content');

function getvalue(){
    return {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    }
}

function validationSaida(v){
    if(v){
        const p = document.createElement('p');
        p.className='pass';
        p.textContent = 'Conta criada!';
        div.appendChild(p)
    }else{
        const p = document.createElement('p');
        p.className='err';
        p.textContent = 'Erro ao criar conta';
        div.appendChild(p)
    }
}

function main(){
    const values = getvalue();
    const result = CreateUser(values);
    if(result){
        validationSaida(true);
    }
    validationSaida(false);
}