import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservaInterface } from '../../servicios/data/reservaData';
import { RoomInterface, roomData } from '../../servicios/data/roomData2';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-reserva-dialog',
  templateUrl: './editar-reserva-dialog.component.html',
  styleUrls: ['./editar-reserva-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditarReservaDialogComponent {
  reserva: ReservaInterface;
  cuartos: RoomInterface[] = roomData;
  estados = ['pendiente', 'confirmada', 'en-curso', 'completada', 'cancelada'];
  myControlEstados = new FormControl('');

  constructor(
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: ReservaInterface
  ) {
    this.reserva = { ...data };
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

  editarReserva() {
    // Lógica para editar reserva
    this.openSnackBar('Reserva actualizada correctamente', 'Cerrar');
    this.cerrarDialog();
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }
}
