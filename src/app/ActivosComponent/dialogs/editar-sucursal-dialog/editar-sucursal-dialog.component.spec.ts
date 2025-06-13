import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSucursalDialogComponent } from './editar-sucursal-dialog.component';

describe('EditarSucursalDialogComponent', () => {
  let component: EditarSucursalDialogComponent;
  let fixture: ComponentFixture<EditarSucursalDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSucursalDialogComponent]
    });
    fixture = TestBed.createComponent(EditarSucursalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
