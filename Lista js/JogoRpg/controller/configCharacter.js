import { createRequire } from "node:module";
import { Persona } from "../models/personModel.js";

const require = createRequire(import.meta.url);

const prompt = require('prompt-sync')();

function Easteregg(nome){
    if(nome === 'petrakio'){
        console.log('personaguem criado!');
        return new Persona('petrakiio',10000,10000);
    }
    return;
}

export function CreatePlayer(){
    console.log('='.repeat(30));
    console.log('Vamos criar seu personagem');
    console.log('='.repeat(30));
    const name = prompt('Seu Nome\nR:');
    const specialCharacter = Easteregg(name);
    if (specialCharacter) {
        return specialCharacter;
    }
    console.log('Personagem criado!');
    return new Persona(name, 100, 100);
}
