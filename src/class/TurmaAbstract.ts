import { ITurma } from "./ITurma.interface";

export abstract class Turma implements ITurma{

constructor(public grau:string, public serie:string){
}
}