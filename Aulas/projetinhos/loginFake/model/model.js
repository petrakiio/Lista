export class User {
    constructor(name, age, email) {
        this.id = Date.now(); // id único
        this.name = name;
        this.age = age;
        this.email = email;
    }

    save() {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(this);
        localStorage.setItem("users", JSON.stringify(users));
    }

    static getAll() {
        return JSON.parse(localStorage.getItem("users")) || [];
    }

    static getById(id) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        return users.find(user => user.id === id);
    }

    static delete(id) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const filtered = users.filter(user => user.id !== id);
        localStorage.setItem("users", JSON.stringify(filtered));
    }
}