import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomInterface } from '../../servicios/data/roomData2';
import { RoomTypeInterface, roomTypeData } from '../../servicios/data/roomTypeData';

@Component({
  selector: 'app-crear-cuarto-dialog',
  templateUrl: './crear-cuarto-dialog.component.html',
  styleUrls: ['./crear-cuarto-dialog.component.scss']
})
export class CrearCuartoDialogComponent {
 cuartoForm: FormGroup;
tiposCuarto: RoomTypeInterface[] = roomTypeData;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CrearCuartoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.cuartoForm = this.fb.group({
        id: 1,
    nombre: ['', Validators.required],
    descripcion: '',
    tipo: ['', Validators.required],
    creado_en: new Date(),
    actualizado_en: new Date(),
    estado: true
  
    });
  }

  guardarEmpleado() {
    if (this.cuartoForm.invalid) {
      this._snackBar.open('Complete todos los campos requeridos', 'Cerrar', { duration: 2000 });
      return;
    }

    const newEmployee: RoomInterface = {
      ...this.cuartoForm.value,
      id: 0, // Se asignará al guardar en la base de datos
    
    };

    this._snackBar.open('Cuarto creado correctamente', 'Cerrar', { duration: 2000 });
  }

  cerrarDialog() {
    this.dialogRef.close();
  }
}
