import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlunosService } from './alunos.service';
import { Aluno } from "./aluno";

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(private alunosService: AlunosService, private router: Router) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

  add(){
    this.router.navigate(['/alunos/novo']);
  }

}
