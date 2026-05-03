import { Persona } from "../models/personModel"

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
    const name = prompt('Seu Nome:');
    Easteregg(name);
    console.log('Personagem criado!');
    return new Persona(name,100,100);
}