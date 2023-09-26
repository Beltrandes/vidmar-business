import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoFormComponent } from './orcamento-form.component';

describe('OrcamentoFormComponent', () => {
  let component: OrcamentoFormComponent;
  let fixture: ComponentFixture<OrcamentoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrcamentoFormComponent]
    });
    fixture = TestBed.createComponent(OrcamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
