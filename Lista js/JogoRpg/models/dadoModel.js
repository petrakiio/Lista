import { ListEnimiesLevelOne } from "../storage/enimeis.js";
import { ListArmsLevelOne } from "../storage/arms.js";

export class Dado{
    constructor(lados){
        this.lados = lados;
    }
    RotateDado(){
        const spin = Math.floor(Math.random() * this.lados);
        return spin;
    }
    RotateEnimies(){
        const spin = this.RotateDado() % ListEnimiesLevelOne.length;
        return ListEnimiesLevelOne[spin];
    }
    RotateArms(){
        const spin = this.RotateDado() % ListArmsLevelOne.length;
        return ListArmsLevelOne[spin];
    }
}
