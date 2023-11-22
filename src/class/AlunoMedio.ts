import { Aluno } from "./Aluno";

export class AlunoMedio extends Aluno{
constructor(nome:string,idade:number,sexo:string,turma:string){
super(nome,idade,sexo,turma)
}
}