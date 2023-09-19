import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasFormComponent } from './obras-form.component';

describe('ObrasFormComponent', () => {
  let component: ObrasFormComponent;
  let fixture: ComponentFixture<ObrasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObrasFormComponent]
    });
    fixture = TestBed.createComponent(ObrasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
