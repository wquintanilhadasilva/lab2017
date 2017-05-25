import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs/Subscription";

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number = 1;
  inscricao: Subscription;
  curso: any;

  constructor(private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router,
    private location: Location) {}

  ngOnInit() {
    //Cria a variável para conseguir des-inscrever
    this.inscricao = this.route.params.subscribe(
      (params: any) => {

        this.id = params['id'];
        this.curso = this.cursosService.getCurso(this.id);

        if(this.curso == null){
          this.router.navigate(['/cursos/naoEncontrado', this.id]);
        }

      }
    );
  }

  goBack(){
    this.location.back();
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
