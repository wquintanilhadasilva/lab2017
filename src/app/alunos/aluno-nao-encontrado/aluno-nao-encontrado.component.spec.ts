import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoNaoEncontradoComponent } from './aluno-nao-encontrado.component';

describe('AlunoNaoEncontradoComponent', () => {
  let component: AlunoNaoEncontradoComponent;
  let fixture: ComponentFixture<AlunoNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
