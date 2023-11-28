import { IAluno } from "./Aluno.interface";

export abstract class Aluno implements IAluno {
    constructor(public nome:string, public tipo:string) { }
  
}   