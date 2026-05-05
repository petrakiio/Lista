import { DataBase } from "./dbModel";
import bcrypt from "bcrypt";

export class User {
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    async criptografia() {
        return await bcrypt.hash(this.password, 10);
    }

    async Insert() {
        const db = new DataBase();
        const conn = await db.connect();

        try {
            const passwordHash = await this.criptografia();
            const [insert] = await conn.execute(
                "INSERT INTO Tb_Users(nome,password,email) VALUES (?,?,?)",
                [this.name, passwordHash, this.email]
            );

            return insert;
        } catch (error) {
            console.log(`Error: ${error}`);
            throw error;
        } finally {
            await conn.end();
        }
    }
}
