import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private autenticado: boolean = false;
  usuarioAutenticadoEmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
      this.router.navigate(['/']);
      this.autenticado = true;
      this.usuarioAutenticadoEmiter.emit(this.autenticado);
    }else{
      this.autenticado = false;
      this.usuarioAutenticadoEmiter.emit(this.autenticado);
    }
  }

}
