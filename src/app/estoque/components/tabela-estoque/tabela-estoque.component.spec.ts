import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEstoqueComponent } from './tabela-estoque.component';

describe('TabelaEstoqueComponent', () => {
  let component: TabelaEstoqueComponent;
  let fixture: ComponentFixture<TabelaEstoqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaEstoqueComponent]
    });
    fixture = TestBed.createComponent(TabelaEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
