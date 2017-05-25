import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlunosGuard implements CanActivateChild {
    constructor() { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean | Promise<boolean>{
        //console.log(route);
        //console.log(state);

        if(state.url.includes('2/editar')){
            alert('Não pode editar esse registro!');
            //return Observable.create(false);
            return false;
        }
        return true;
    }
}