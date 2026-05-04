const prompt = require('prompt-sync')();

function EnimieIA(dado,player,enimie){
    if(dado.RotateDado() % 2 === 0){
        const msg = enimie.GiveDamage(player);
        console.log(msg);
    }else{
        console.log(enimie.Cure());
    }
}

export function Battle(player, dado){
    const enemy = dado.RotateEnimies();

    let turno = 'player';

    while(player.life > 0 && enemy.life > 0){
        console.log('='.repeat(30));
        console.log(`${player.name} VS ${enemy.name}`);
        console.log('='.repeat(30));

        if (turno === 'player'){
            console.log('1-Atacar | 2-Curar | 3-Inventario | ENTER-Status');
            const opn = prompt('R:');

            switch(opn){
                case '1':
                    player.GiveDamage(enemy);
                    break;

                case '2':
                    console.log(player.Cure());
                    break;
                
                case '3':
                    console.log(player.SawInventory());
                
                case '':
                    console.log(player.Status());
                    continue; // não passa o turno
            }

            turno = 'enemy'; // troca turno
        } 
        
        else {
            console.log('Turno do inimigo...');
            EnimieIA(dado,player,enemy);

            turno = 'player'; // volta pro player
        }
    }

    // fim da batalha
    if (player.life <= 0){
        console.log('Você perdeu!');
    } else {
        console.log('Você venceu!');
    }
}