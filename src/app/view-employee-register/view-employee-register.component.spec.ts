import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeRegisterComponent } from './view-employee-register.component';

describe('ViewEmployeeRegisterComponent', () => {
  let component: ViewEmployeeRegisterComponent;
  let fixture: ComponentFixture<ViewEmployeeRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmployeeRegisterComponent]
    });
    fixture = TestBed.createComponent(ViewEmployeeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
