import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  subscricao: Subscription

  constructor(
    private cursosServices: CursosService,
    private routerParams: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.cursos = this.cursosServices.getCursos();
    this.subscricao = this.routerParams.queryParams.subscribe(
      (param: any) => {
        this.pagina = param['pagina'];
      }
    );
  }

  proximaPagina(){
    this.router.navigate(['/cursos'], { queryParams: {'pagina': ++this.pagina}});
  }

   proximaAnterior(){
    this.router.navigate(['/cursos'], { queryParams: {'pagina': --this.pagina}});
  }

  ngOnDestroy(){
    this.subscricao.unsubscribe();
  }

}
