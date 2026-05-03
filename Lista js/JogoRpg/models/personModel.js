export class Persona{
    constructor(name,damage,life){
        this.name = name;
        this.damage = damage;
        this.life = life;
        this.inventory = [];
        this.honor = 0;
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
    GiveDamage(enimie){
        if(this.inventory != null){//Se o inventario não for nulo
            this.inventory[0].damage += this.damage; //Some o valor de dano dele com do player
            enimie.ReciveDamage(this.damage);
        }
        enimie.ReciveDamage(this.damage);
    }
    SawInventory(){
         console.log(`itens do inventario:${this.inventory}`);
    }
    AddHonor(){
        this.honor += 5;
    }
    RemoveHonor(){
        this.honor -= 5;
    }
}