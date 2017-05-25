import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { CursosGuard } from './guards/cursos.guard';

const appRoutes: Routes = [
    {path: '', component: HomeComponent,  canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule', canLoad:[AuthGuard], canActivate:[AuthGuard], canActivateChild:[CursosGuard]},
    {path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule', canLoad:[AuthGuard], canActivate:[AuthGuard]}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}