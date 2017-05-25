import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { CursosGuard } from './guards/cursos.guard';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent,  canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule', canLoad:[AuthGuard], canActivate:[AuthGuard], canActivateChild:[CursosGuard]},
    {path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule', canLoad:[AuthGuard], canActivate:[AuthGuard]},
    {path: "", redirectTo: '/home', pathMatch:'full'},
    {path: "**", component: PaginaNaoEncontradaComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes, {useHash: true})], //usando a # na frente das rotas...
    exports:[RouterModule]
})
export class AppRoutingModule{}