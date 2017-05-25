import { AlunoNaoEncontradoComponent } from './aluno-nao-encontrado/aluno-nao-encontrado.component';
import { AlunosComponent } from './alunos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';

import { AlunosGuard } from './guards/alunos.guard';
import { CanDeactivateGuard } from './../guards/can-deactivate.guard';

import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes =[
    {path: '', component: AlunosComponent, canActivateChild:[AlunosGuard],
        children:[
            {path: 'novo', component: AlunoFormComponent},
            {path: 'alunoNaoEncontrado', component: AlunoNaoEncontradoComponent},
            {path: ':id', component: AlunoDetalheComponent, resolve:{aluno: AlunoDetalheResolver}},
            {path: ':id/editar', component: AlunoFormComponent, canDeactivate:[CanDeactivateGuard]}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule],
})
export class AlunosRoutingModule { }
