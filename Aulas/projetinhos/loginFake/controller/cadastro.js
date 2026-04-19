import { User } from "../model/model.js";

export function Insert(name, age, email) {
    try {
        const user = new User(name, age, email);
        user.save();
        return true;
    } catch (error) {
        console.log("erro", error);
        return false
    }
}
