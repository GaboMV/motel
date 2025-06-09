import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion-dialog',
  templateUrl: './confirmacion-dialog.component.html',
  styleUrls: ['./confirmacion-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ConfirmacionDialogComponent {

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { error: string, mensaje: string, tipo: string, idAux?: number }) {
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }
}
