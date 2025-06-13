import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EditarRolDialogComponent } from './editar-rol-dialog.component';

describe('EditarRolDialogComponent', () => {
  let component: EditarRolDialogComponent;
  let fixture: ComponentFixture<EditarRolDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRolDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { rol: {} } },
        { provide: MatSnackBar, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(EditarRolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
