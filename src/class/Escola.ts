import { IAluno } from "./Aluno.interface";
import { ITurma } from "./ITurma.interface";

export class Escola{
constructor(public turma:ITurma,public aluno:IAluno, public valorMensalidade:number){
}
public ValorTotal():number{
return this.valorMensalidade  * 12;
}
}