import { Component } from '@angular/core';
import { AlunoServiceService } from '../Service/aluno-service.service';
import { AlunoFunamental } from '../class/AlunoFundamental';
import { AlunoMedio } from '../class/AlunoMedio';
import { Escola } from '../class/Escola';
import { Turma } from '../class/TurmaAbstract';
import { TurmaFundamental } from '../class/TurmaFundamental';
import { TumraMedia } from '../class/TurmaMedia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AlunoCadastro';
  aluno = { nome: '' };
  tipoAluno = 'fundamental';
  tipoTurma = ''
  valorMensalidade!: number;
  turma!: Turma


  constructor(public alunoService: AlunoServiceService) { }


  CriarAluno(): void {
    if (this.tipoAluno === 'fundamental') {
        this.aluno = new AlunoFunamental(this.aluno.nome, 'Fundamental');
      this.tipoTurma = 'infantil';
    } else if (this.tipoAluno === 'medio') {
      this.aluno = new AlunoMedio(this.aluno.nome, 'Medio');
      this.tipoTurma = 'superior';
    }
this.alunoService.setAluno(this.aluno)

    this.EscolherTurma();
  }
  ngOnInit() {

  }
  Escola(): void {
    this.CriarAluno();
    let aluno = this.alunoService.getAluno();
    let turma = this.alunoService.getTurma();
    let escola = new Escola(turma, aluno, this.valorMensalidade);
    this.alunoService.addEscola(escola);
  }

  EscolherTurma() {
    if (this.tipoTurma === 'infantil') {
      this.turma = new TurmaFundamental();
    }
    else if (this.tipoTurma === 'superior') {
      this.turma = new TumraMedia();
    }
       this.alunoService.setTurma(this.turma)
  }

}
