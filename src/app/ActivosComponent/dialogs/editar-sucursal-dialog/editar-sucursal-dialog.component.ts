import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Branch } from '../../servicios/data/branchData';

@Component({
  selector: 'app-editar-sucursal-dialog',
  templateUrl: './editar-sucursal-dialog.component.html',
  styleUrls: ['./editar-sucursal-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditarSucursalDialogComponent {
  branchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarSucursalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { branch: Branch }
  ) {
    this.branchForm = this.fb.group({
      nombre: [data.branch.nombre, Validators.required],
      direccion: [data.branch.direccion, Validators.required],
      telefono1: [data.branch.telefono1, Validators.required],
      telefono2: [data.branch.telefono2 || ''],
      telefono3: [data.branch.telefono3 || ''],
      motel: [data.branch.motel, Validators.required],
      estado: [data.branch.estado]
    });
  }

  guardarCambios() {
    if (this.branchForm.invalid) {
      this._snackBar.open('Complete todos los campos requeridos', 'Cerrar', { duration: 2000 });
      return;
    }

    const updatedBranch: Branch = {
      ...this.data.branch,
      ...this.branchForm.value,
      telefono2: this.branchForm.value.telefono2 || undefined,
      telefono3: this.branchForm.value.telefono3 || undefined
    };

    this.dialogRef.close(updatedBranch);
    this._snackBar.open('Sucursal actualizada correctamente', 'Cerrar', { duration: 2000 });
  }

  cerrarDialog() {
    this.dialogRef.close();
  }
}
