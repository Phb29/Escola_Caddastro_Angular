import { ITurma } from "./ITurma.interface";

export abstract class Turma implements ITurma{

constructor(public turma:string, public valor:number){
}
  
}