import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTabComponent } from './side-tab.component';

describe('SideTabComponent', () => {
  let component: SideTabComponent;
  let fixture: ComponentFixture<SideTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideTabComponent]
    });
    fixture = TestBed.createComponent(SideTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
