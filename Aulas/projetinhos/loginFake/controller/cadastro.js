//Importando classe
import { User} from "../model/model";

function GetValues(){
    return {
        Name:document.getElementById('name').value,
        Age:document.getElementById('age').value,
        Email:document.getElementById('email').value
    }
}

export function Insert(){
    try {
        const values = GetValues();
        const user = new User(values.Name,values.Age,values.Email);
        user.save(user);
        return true
    }catch(error){
        console.log('erro')
        return false
    }
}
