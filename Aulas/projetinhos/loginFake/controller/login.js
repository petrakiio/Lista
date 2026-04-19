import { User } from "../model/model";

function GetValues(){
    return {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value
    }
}

function GetUser(dados,users){
    for(const user of users){
        if (dados.name === user.name && dados.email === user.email){
            return user;
        }
    }
    return false;
}

export function Login(){
    const result = GetUser(GetValues,User.getAll);
    
}