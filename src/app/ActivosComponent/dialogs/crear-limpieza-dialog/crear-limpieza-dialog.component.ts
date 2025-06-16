import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-limpieza-dialog',
  templateUrl: './crear-limpieza-dialog.component.html',
  styleUrls: ['./crear-limpieza-dialog.component.scss']
})
export class CrearLimpiezaDialogComponent {

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }

}
