import { Component, Inject } from '@angular/core';
import { TransaccionInterface } from '../../servicios/data/transactionData';
import { roomData, RoomInterface } from '../../servicios/data/roomData2';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { employeeData, EmployeeInterface } from '../../servicios/data/employeeData';

@Component({
  selector: 'app-editar-transaccion-dialog',
  templateUrl: './editar-transaccion-dialog.component.html',
  styleUrls: ['./editar-transaccion-dialog.component.scss']
})
export class EditarTransaccionDialogComponent {
 transaccion: TransaccionInterface;
cuartos: RoomInterface[] = roomData;
empleados: EmployeeInterface[] = employeeData;
  myControlEstados = new FormControl('');

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog,   @Inject(MAT_DIALOG_DATA) public data: TransaccionInterface) {
     this.transaccion = { ...data };
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

   editarTransaccion() {
    // Lógica para editar reserva
    this.openSnackBar('Transaccion actualizada correctamente', 'Cerrar');
    this.cerrarDialog();
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }
}


