import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Aluno } from "../aluno";

//import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;

  subscricao: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    //private alunosService: AlunosService,
    private route: Router,
    private location: Location) { }

  ngOnInit() {
    /* AGORA O OBJETO ALUNO JÁ VEM PREENCHIDO, OBTIDO PELO RESOLVER!!!

    this.subscricao = this.activatedRoute.params.subscribe(
      (params: any) => {

        let id: number = params['id'];
        this.aluno = this.alunosService.getAluno(id);

        if(this.aluno == null){
          this.aluno = {};
          //console.log('redirect');
          //this.route.navigate(['/alunoNaoEncontrado']);
        }

      }
    ); */

    this.subscricao = this.activatedRoute.data.subscribe(
      (info: {aluno: Aluno}) => {
        this.aluno = info.aluno;
      }
    );

  }

  goBack(){
    this.route.navigate(['/alunos']);
  }

  editar(){
    this.route.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy(){
    this.subscricao.unsubscribe();
  }
}
