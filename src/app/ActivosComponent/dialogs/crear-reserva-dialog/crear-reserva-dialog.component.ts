import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservaInterface } from '../../servicios/data/reservaData';
import { FormControl } from '@angular/forms';
import { RoomInterface, roomData } from '../../servicios/data/roomData2';

@Component({
  selector: 'app-crear-reserva-dialog',
  templateUrl: './crear-reserva-dialog.component.html',
  styleUrls: ['./crear-reserva-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrearReservaDialogComponent {
  reserva: ReservaInterface = {
    id: 0,
    nombreCliente: '',
    nombreCuarto: '',
    horaInicio: new Date(),
    horaFin: new Date(),
    detalles: '',
    estado: 'pendiente',
    pagado: false,
    creado_en: new Date(),
    actualizado_en: new Date()
  };

  cuartos: RoomInterface[] = roomData;
  estados = ['pendiente', 'confirmada', 'en-curso', 'completada', 'cancelada'];
  myControlEstados = new FormControl('');

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

  crearReserva() {
    // Lógica para crear reserva
    this.openSnackBar('Reserva creada correctamente', 'Cerrar');
    this.cerrarDialog();
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }
}
