import { Component, ViewEncapsulation } from '@angular/core';
import { roomTypeData, RoomTypeInterface } from '../../servicios/data/roomTypeData';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-crear-tipo-cuarto-dialog',
  templateUrl: './crear-tipo-cuarto-dialog.component.html',
  styleUrls: ['./crear-tipo-cuarto-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CrearTipoCuartoDialogComponent {

  tipoCuarto: RoomTypeInterface = {
   id: 0,
  nombre: "",
  descripcion: "",
  precio: 0,
  creado_en: new Date(),
  actualizado_en: new Date(),
  estado: true
  };


  myControlEstados = new FormControl('');

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

  crearTipoCuarto() {
    // Lógica para crear reserva
    this.openSnackBar('Tipo de cuarto creado correctamente', 'Cerrar');
    this.cerrarDialog();
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }
}

