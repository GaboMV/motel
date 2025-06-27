import { Component, Inject } from '@angular/core';
import { RoomInterface } from '../../servicios/data/roomData2';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { roomTypeData, RoomTypeInterface } from '../../servicios/data/roomTypeData';

@Component({
  selector: 'app-editar-cuarto-dialog',
  templateUrl: './editar-cuarto-dialog.component.html',
  styleUrls: ['./editar-cuarto-dialog.component.scss']
})
export class EditarCuartoDialogComponent {

  cuarto: RoomInterface;
tiposCuarto: RoomTypeInterface[] = roomTypeData;

  myControlEstados = new FormControl('');

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog,   @Inject(MAT_DIALOG_DATA) public data: RoomInterface) {
     this.cuarto = { ...data };
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

   editarCuarto() {
    // Lógica para editar reserva
    this.openSnackBar('Cuarto actualizado correctamente', 'Cerrar');
    this.cerrarDialog();
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }
}


