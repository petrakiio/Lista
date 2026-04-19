//Importando classe
import { User} from "../model/model";

export function Insert(name,email,age){
    try {
        const user = new User(name,age,email);
        user.save(user);
        return true
    }catch(error){
        console.log('erro')
        return false
    }
}
