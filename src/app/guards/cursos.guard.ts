import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CursosGuard implements CanActivateChild {

    constructor() { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('guarda rotas filha curso.')
        return true;
    }
}