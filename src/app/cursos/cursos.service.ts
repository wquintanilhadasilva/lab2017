import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      { id:1, nome: 'Angular 2'},
      { id:2, nome: 'Angular 4'}
    ]
  }

  getCurso(id:number){
    let cursos = this.getCursos();
    return cursos.find(curso => curso.id == id);
  }

}
