//Importando classe
import { User} from "../model/model";

function GetValues(){
    return {
        Name:document.getElementById('name').value,
        Age:document.getElementById('age').value,
        Email:document.getElementById('email').value
    }
}

function Main(){
    const values = GetValues();
    const user = new User(values.Name,values.Age,values.Email);
    user.save(user);
}