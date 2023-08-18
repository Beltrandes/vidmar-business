import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueFormComponent } from './estoque-form.component';

describe('EstoqueFormComponent', () => {
  let component: EstoqueFormComponent;
  let fixture: ComponentFixture<EstoqueFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueFormComponent]
    });
    fixture = TestBed.createComponent(EstoqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
