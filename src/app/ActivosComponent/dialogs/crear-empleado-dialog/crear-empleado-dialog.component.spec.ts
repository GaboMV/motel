import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEmpleadoDialogComponent } from './crear-empleado-dialog.component';

describe('CrearEmpleadoDialogComponent', () => {
  let component: CrearEmpleadoDialogComponent;
  let fixture: ComponentFixture<CrearEmpleadoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearEmpleadoDialogComponent]
    });
    fixture = TestBed.createComponent(CrearEmpleadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
