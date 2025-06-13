import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeInterface } from '../../servicios/data/employeeData';

@Component({
  selector: 'app-crear-empleado-dialog',
  templateUrl: './crear-empleado-dialog.component.html',
  styleUrls: ['./crear-empleado-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrearEmpleadoDialogComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CrearEmpleadoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.employeeForm = this.fb.group({
      nombre: ['', Validators.required],
      ci: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono1: ['', Validators.required],
      telefono2: [''],
      estado: [true],
      rol_id: ['', Validators.required],
      sucursales_id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  guardarEmpleado() {
    if (this.employeeForm.invalid) {
      this._snackBar.open('Complete todos los campos requeridos', 'Cerrar', { duration: 2000 });
      return;
    }

    const newEmployee: EmployeeInterface = {
      ...this.employeeForm.value,
      id: 0, // Se asignará al guardar en la base de datos
      telefono2: this.employeeForm.value.telefono2 || undefined
    };

    this.dialogRef.close(newEmployee);
    this._snackBar.open('Empleado creado correctamente', 'Cerrar', { duration: 2000 });
  }

  cerrarDialog() {
    this.dialogRef.close();
  }
}
