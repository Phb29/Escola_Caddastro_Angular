import { Injectable } from '@angular/core';
import { ITurma } from '../class/ITurma.interface';
import { Aluno } from '../class/Aluno';
import { Turma } from '../class/TurmaAbstract';
import { Escola } from '../class/Escola';
import { IAluno } from '../class/Aluno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {

  private aluno!: IAluno;
  private turma!: ITurma;
  private escola: Escola[] = [];

  constructor() { }

  setAluno(aluno:any) {
    this.aluno = aluno; 
  }
    getAluno():IAluno {
    return this.aluno;
  }
  setTurma(turma: any) {
    this.turma = turma
  }
  getTurma():Turma {
    return this.turma;
  }
  addEscola(escolas: Escola) {
    this.escola.push(escolas)
  }
  getEscola(): Escola[] {
    return this.escola
  }
}
