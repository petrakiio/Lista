import { createRequire } from "node:module";
import { Dado } from "../models/dadoModel.js";

const require = createRequire(import.meta.url);

const prompt = require('prompt-sync')();

export function CreateDado(){
    const lados = Number(prompt('Você quer ter quantos lados no dado? (Essa escolha tem impacto na gameplay)\nR:'));
    return new Dado(Number.isInteger(lados) && lados > 0 ? lados : 3);
}
