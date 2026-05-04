import { createRequire } from "node:module";
import { Persona } from "../models/personModel.js";

const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')();

function Easteregg(nome){
    if (nome.trim().toLowerCase() === 'petrakiio'){
        console.log('personagem criado!');
        return new Persona('petrakiio', 10000, 10000);
    }
    return null;
}

export function CreatePlayer(){
    console.log('='.repeat(30));
    console.log('Vamos criar seu personagem');
    console.log('='.repeat(30));

    const name = prompt('Seu nome: ');

    const specialCharacter = Easteregg(name);
    if (specialCharacter !== null) {
        return specialCharacter;
    }

    console.log('Personagem criado!');
    return new Persona(name, 100, 100);
}
