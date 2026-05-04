export class Persona{
    constructor(name,damage,life){
        this.name = name;
        this.damage = damage;
        this.life = life;
        this.inventory = [];
        this.honor = 0;
    }
    ReciveDamage(dam,dado){
        const df = this.VerifInventoryDefense();
        if (dam < df.defense){
            return `O item:${df.name}; Bloqueou o ataque`;
        }
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
        if(0 < this.inventory.length){
            const arm = this.VerifInventoryDamage();
            let danoFinal = this.damage += arm.damage;
            return `${this.name}: deu ${danoFinal} em ${enimie.name}`
        }
    }
    Cure(){
        this.life += 10;
        return `${this.name}:Curou 10 pontos`
    }
    Status(){
        return `Nome:${this.name} Life:${this.life}`
    }
    SawInventory(){
         console.log(`itens do inventario:${this.inventory}`);
    }
    VerifInventoryDefense(){
        for (let i = 0; i < this.inventory.length; i++) {
            const arm = this.inventory[i];

            if (arm.category === 'defense') {
                return arm;
            }
        }
    }
    VerifInventoryDamage(){
        for(let i = 0; i < this.inventory.length;i++){
            const arm = this.inventory[i];
            if(arm.category === 'atack'){
                return arm.damage;
            }
        }
    }
    AddHonor(){
        this.honor += 5;
    }
    RemoveHonor(){
        this.honor -= 5;
    }
}