import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-mantenimiento-dialog',
  templateUrl: './crear-mantenimiento-dialog.component.html',
  styleUrls: ['./crear-mantenimiento-dialog.component.scss']
})
export class CrearMantenimientoDialogComponent {

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }

}
