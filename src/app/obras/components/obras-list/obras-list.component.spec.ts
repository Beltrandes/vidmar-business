import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasListComponent } from './obras-list.component';

describe('ObrasListComponent', () => {
  let component: ObrasListComponent;
  let fixture: ComponentFixture<ObrasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObrasListComponent]
    });
    fixture = TestBed.createComponent(ObrasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
