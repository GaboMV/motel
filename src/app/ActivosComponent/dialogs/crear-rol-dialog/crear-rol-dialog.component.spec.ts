import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CrearRolDialogComponent } from './crear-rol-dialog.component';

describe('CrearRolDialogComponent', () => {
  let component: CrearRolDialogComponent;
  let fixture: ComponentFixture<CrearRolDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearRolDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatSnackBar, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(CrearRolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
