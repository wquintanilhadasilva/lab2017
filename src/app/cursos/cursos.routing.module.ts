import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    {path: 'cursos', component: CursosComponent},
    {path: 'naoEncontrado/:id', component: CursoNaoEncontradoComponent},
    {path: 'curso/:id', component: CursoDetalheComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class CursosRoutingModule{}