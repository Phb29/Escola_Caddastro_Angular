import { Injectable } from '@angular/core';
import { ITurma } from '../class/ITurma.interface';
import { Aluno } from '../class/Aluno';
import { Turma } from '../class/TurmaAbstract';
import { Escola } from '../class/Escola';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {

  private aluno!: Aluno
  private turma!: Turma
  private escola: Escola[] = [];

  constructor() { }

  setAluno(aluno: any) {
    this.aluno = aluno;
  }
  getAluno() {
    return this.aluno;
  }
  setTurma(turma: any) {
    this.turma = turma
  }
  getTurma() {
    return this.turma;
  }
  addEscola(escola: Escola) {
    this.escola.push(escola)
  }
  getEscola(): Escola[] {
    return this.escola
  }
}
