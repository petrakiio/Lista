class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Insert(user){
        localStorage.setItem("user",JSON.stringify(user));
    }
}