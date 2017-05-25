import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IFormCanDeactivate } from './iform-candeactivate';
// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    
    canDeactivate(
        component: IFormCanDeactivate,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('Desativando rota');
        return component.podeMudar();
    }
}