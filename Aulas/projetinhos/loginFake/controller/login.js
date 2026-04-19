import { User } from "../model/model";


function GetUser(dados,users){
    for(const user of users){
        if (dados.name === user.name && dados.email === user.email){
            return user;
        }
    }
    return false;
}

export function Login(name,email){
    try{
        const values = {name:name,email:email};
        const result = GetUser(values,User.getAll);
        if (result === false) return false;
        return result.id;
    }catch{
        console.log('erro');
        return false;
    }
}