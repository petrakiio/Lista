import { User } from "../model/model.js";


function GetUser(data, users) {
    for (const user of users) {
        if (data.name === user.name && data.email === user.email) {
            return user;
        }
    }

    return false;
}

export function Login(name, email) {
    try {
        const values = { name, email };
        const result = GetUser(values, User.getAll());

        if (result === false) return false;

        return result.id;
    } catch (error) {
        console.log("erro", error);
        return false;
    }
}
