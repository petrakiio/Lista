import { ListEnimiesLevelOne } from "../storage/enimeis";
import { ListArmsLevelOne } from "../storage/arms";

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
    RotateArms(){
        const spin = this.RotateDado();
        return ListArmsLevelOne[spin];
    }
}
