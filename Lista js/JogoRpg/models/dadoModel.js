import { ListEnimies } from "../storage/enimeis";


export class Dado{
    constructor(lados){
        this.lados = lados;
    }
    RotateDado(){
        const spin = Math.floor(Math.random() * this.lados);
        return spin;
    }
    RotateEnimies(){
        const spin = this.RotateDado();
        return ListEnimies[spin];
    }

}
