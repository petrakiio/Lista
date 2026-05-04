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
        if (df && dam < df.defense){
            return `O item:${df.name}; Bloqueou o ataque`;
        }
        switch(dado){
            case 0:
                return `${this.name} Desviou do golpe`;
            case 1: {
                this.life -= dam;
                return `${this.name} recebeu ${dam} de dano! Vida restante: ${this.life}`;
            }
            case 2: {
                const criticalDamage = dam * 2;
                this.life -= criticalDamage;
                return `${this.name} recebeu um critical damage de ${criticalDamage}! Vida restante: ${this.life}`;
            }
        }
    }
    GiveDamage(enimie){
        let danoFinal = this.damage;
        if (0 < this.inventory.length) {
            const armDamage = this.VerifInventoryDamage();
            if (armDamage) {
                danoFinal += armDamage;
            }
        }
        return enimie.ReciveDamage(danoFinal, 1);
    }
    Cure(){
        this.life += 10;
        return `${this.name}:Curou 10 pontos`
    }
    Status(){
        return `Nome:${this.name} Life:${this.life} Damage:${this.damage}`;
    }
    SawInventory(){
        return `itens do inventario: ${this.inventory.map((item) => item.name).join(', ') || 'vazio'}`;
    }
    VerifInventoryDefense(){
        for (let i = 0; i < this.inventory.length; i++) {
            const arm = this.inventory[i];

            if (arm.category === 'defense') {
                return arm;
            }
        }
        return null;
    }
    VerifInventoryDamage(){
        for(let i = 0; i < this.inventory.length;i++){
            const arm = this.inventory[i];
            if(arm.category === 'atack'){
                return arm.damage;
            }
        }
        return 0;
    }
    AddHonor(){
        this.honor += 5;
    }
    RemoveHonor(){
        this.honor -= 5;
    }
}
