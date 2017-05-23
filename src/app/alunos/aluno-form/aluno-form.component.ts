import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno:any = {};
  novo:boolean = true;

  acao:string = 'Incluindo';

  subscritor: Subscription;

  constructor(
    private alunosService: AlunosService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscritor = this.routes.params.subscribe(
      (param:any) =>{
        let codigo = param['id'];
        this.aluno = {};
        if(codigo != null){
          this.aluno = this.alunosService.getAluno(codigo);
          this.novo = false;
          this.acao = 'Modificando';

          if(this.aluno === null){
            this.aluno = {};
          }
        }
      }
    );
  }

  goBack(){
    this.router.navigate(['/alunos']);
  }

  gravar(){
    this.alunosService.adicionar(this.aluno);
    this.goBack();
  }

  ngOnDestroy(){
    this.subscritor.unsubscribe();
  }

}
