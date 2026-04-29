export class Persona{
    constructor(name,damage,life){
        this.name = name;
        this.damage = damage;
        this.life = life;
        this.inventory = [];
    }
    ReciveDamage(dam,dado){
        switch(dado){
            case 0:
                return `${this.name} Desviou do golpe`;
            case 1:
                return `${this.name} recebeu ${this.life -= dam} de dano!`;
            case 2:
                return `${this.name} recebeu um critial damage de ${this.life -= (dam * 2)}`;
        }
    }
    SawInventory(){
         console.log(`itens do inventario:${this.inventory}`);
    }
    
}