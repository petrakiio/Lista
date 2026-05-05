import { User } from "../model/userModel.js";

interface Usuario {
    name: string;
    email: string;
    password: string;
}

function formatname(name: string) {
    return name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "");
}

function validation(values: Usuario): Usuario | null {
    if (!values.name || !values.password || !values.email) {
        return null;
    }
    const tamanhoNome = [...values.name].length;
    const tamanhoEmail = [...values.email].length;

    if (tamanhoNome > 50 || tamanhoEmail > 50) {
        return null;
    }
    values.name = formatname(values.name);
    return values;
}

export async function CreateUser(values: Usuario) {
    const result: Usuario | null = validation(values);

    if (result) {
        try {
            const user = new User(result.name, result.email, result.password);
            return await user.Save();
        } catch (error) {
            console.log(`Error: ${error}`);
            return false;
        }
    } else {
        return false;
    }
}
