import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-habilitar-dialog',
  templateUrl: './crear-habilitar-dialog.component.html',
  styleUrls: ['./crear-habilitar-dialog.component.scss']
})
export class CrearHabilitarDialogComponent {

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }

}
