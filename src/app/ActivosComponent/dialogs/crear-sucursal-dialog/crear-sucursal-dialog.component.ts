import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Branch } from '../../servicios/data/branchData';

@Component({
  selector: 'app-crear-sucursal-dialog',
  templateUrl: './crear-sucursal-dialog.component.html',
  styleUrls: ['./crear-sucursal-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrearSucursalDialogComponent {
  branchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CrearSucursalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.branchForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono1: ['', Validators.required],
      telefono2: [''],
      telefono3: [''],
      motel: ['', Validators.required],
      estado: [true]
    });
  }

  guardarSucursal() {
    if (this.branchForm.invalid) {
      this._snackBar.open('Complete todos los campos requeridos', 'Cerrar', { duration: 2000 });
      return;
    }

    const newBranch: Branch = {
      id: 0, // Se asignará al guardar
      ...this.branchForm.value,
      telefono2: this.branchForm.value.telefono2 || undefined,
      telefono3: this.branchForm.value.telefono3 || undefined
    };

    this.dialogRef.close(newBranch);
    this._snackBar.open('Sucursal creada correctamente', 'Cerrar', { duration: 2000 });
  }

  cerrarDialog() {
    this.dialogRef.close();
  }
}
