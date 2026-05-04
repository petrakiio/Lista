import { Dado } from "../models/dadoModel";

const prompt = require('prompt-sync')();

export function CreateDado(){
    const lados = prompt('Você quer ter quantos lado no dado?(Essa escolha tem impacto na gameplay)\zR:');
    return  new Dado(lados);
}