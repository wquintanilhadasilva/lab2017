import { AlunoNaoEncontradoComponent } from './aluno-nao-encontrado/aluno-nao-encontrado.component';
import { AlunosComponent } from './alunos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes =[
    {path: '', component: AlunosComponent, children:[
        {path: 'novo', component: AlunoFormComponent},
        {path: 'alunoNaoEncontrado', component: AlunoNaoEncontradoComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunoFormComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule],
})
export class AlunosRoutingModule { }
