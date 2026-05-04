import { CreatePlayer } from "../controller/configCharacter.js";
import { CreateDado } from "../controller/configDado.js";
import { Battle } from "../controller/batlleCharacter.js";

function Main(){
    const player = CreatePlayer();
    const dado = CreateDado();
    Battle(player, dado);
}

Main();
