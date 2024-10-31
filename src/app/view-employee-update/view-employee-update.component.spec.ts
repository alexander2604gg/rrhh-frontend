import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeUpdateComponent } from './view-employee-update.component';

describe('ViewEmployeeUpdateComponent', () => {
  let component: ViewEmployeeUpdateComponent;
  let fixture: ComponentFixture<ViewEmployeeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmployeeUpdateComponent]
    });
    fixture = TestBed.createComponent(ViewEmployeeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
