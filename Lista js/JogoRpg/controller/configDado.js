import { createRequire } from "node:module";
import { Dado } from "../models/dadoModel.js";

const require = createRequire(import.meta.url);

const prompt = require('prompt-sync')();

export function CreateDado(){
    const lados = Number(prompt('Quantos lados o dado vai ter? '));
    return new Dado(Number.isInteger(lados) && lados > 0 ? lados : 3);
}
