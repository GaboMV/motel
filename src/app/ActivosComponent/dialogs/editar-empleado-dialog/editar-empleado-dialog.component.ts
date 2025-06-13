import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeInterface } from '../../servicios/data/employeeData';

@Component({
  selector: 'app-editar-empleado-dialog',
  templateUrl: './editar-empleado-dialog.component.html',
  styleUrls: ['./editar-empleado-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditarEmpleadoDialogComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarEmpleadoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { empleado: EmployeeInterface }
  ) {
    this.employeeForm = this.fb.group({
      nombre: [data.empleado.nombre, Validators.required],
      ci: [data.empleado.ci, Validators.required],
      email: [data.empleado.email, [Validators.required, Validators.email]],
      telefono1: [data.empleado.telefono1, Validators.required],
      telefono2: [data.empleado.telefono2 || ''],
      estado: [data.empleado.estado],
      rol_id: [data.empleado.rol_id, Validators.required],
      sucursales_id: [data.empleado.sucursales_id, Validators.required],
      password: [''] // No mostramos la contraseña actual por seguridad
    });
  }

  guardarCambios() {
    if (this.employeeForm.invalid) {
      this._snackBar.open('Complete todos los campos requeridos', 'Cerrar', { duration: 2000 });
      return;
    }

    const updatedEmployee: EmployeeInterface = {
      ...this.data.empleado,
      ...this.employeeForm.value,
      telefono2: this.employeeForm.value.telefono2 || undefined
    };

    this.dialogRef.close(updatedEmployee);
    this._snackBar.open('Empleado actualizado correctamente', 'Cerrar', { duration: 2000 });
  }

  cerrarDialog() {
    this.dialogRef.close();
  }
}
