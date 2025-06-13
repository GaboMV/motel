import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmpleadoDialogComponent } from './editar-empleado-dialog.component';

describe('EditarEmpleadoDialogComponent', () => {
  let component: EditarEmpleadoDialogComponent;
  let fixture: ComponentFixture<EditarEmpleadoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEmpleadoDialogComponent]
    });
    fixture = TestBed.createComponent(EditarEmpleadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
