import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno>{
    
    constructor(private alunoService: AlunosService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        let id = route.params['id'];
        return this.alunoService.getAluno(id);
    }

}