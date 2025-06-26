import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { roomTypeData, RoomTypeInterface } from '../../servicios/data/roomTypeData';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-editar-tipo-cuarto-dialog',
  templateUrl: './editar-tipo-cuarto-dialog.component.html',
  styleUrls: ['./editar-tipo-cuarto-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EditarTipoCuartoDialogComponent {

  tipoCuarto: RoomTypeInterface;


  myControlEstados = new FormControl('');

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog,   @Inject(MAT_DIALOG_DATA) public data: RoomTypeInterface) {
     this.tipoCuarto = { ...data };
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

   editarTipoCuarto() {
    // Lógica para editar reserva
    this.openSnackBar('Tipo de cuarto actualizado correctamente', 'Cerrar');
    this.cerrarDialog();
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }
}


