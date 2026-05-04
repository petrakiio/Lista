import { CreatePlayer } from "../controller/configCharacter";
import { CreateDado } from "../controller/configDado";
import { Battle } from "../controller/batlleCharacter";

function Main(){
    const player = CreatePlayer();
    const dado = CreateDado();
    Battle(player,dado);
}