export class Dado{
    constructor(lados){
        this.lados = lados;
    }
    RotateDado(){
        const spin = Math.floor(Math.random() * this.lados);
        return spin;
    }
}
