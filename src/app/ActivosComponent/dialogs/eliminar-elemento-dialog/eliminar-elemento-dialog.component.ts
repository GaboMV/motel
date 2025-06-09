import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngxs/store';
import { AccessDIalogsService } from '../../servicios/access/access-dialogs.service';

@Component({
  selector: 'app-eliminar-elemento-dialog',
  templateUrl: './eliminar-elemento-dialog.component.html',
  styleUrls: ['./eliminar-elemento-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EliminarElementoDialogComponent {

  constructor(private store: Store, private dialog: MatDialog,
    public dialogRef: MatDialogRef<EliminarElementoDialogComponent>, public dialogsService: AccessDIalogsService,
    @Inject(MAT_DIALOG_DATA) public data: { idelemento: number, tipo: string, idAux?: number }, private _snackBar: MatSnackBar) { }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }
  ngOnInit(): void {
  }

  eliminarElemento(id: number, tipo: string, idAux?: number) {
    switch (tipo) {
      case 'Producto':
        this.eliminarProducto(id);
        break;
      case 'Empleado':
        this.eliminarEmpleado(id);
        break;
      default:
        break;
    }
    this.cerrarDialog();
  }

  cancelar() {
    this.cerrarDialog();
    this.openSnackBar('Operación cancelada', 'Cerrar');
  }

  cerrarDialog() {
    this.dialogRef.close();
  }

  eliminarProducto(id: number) {
    this.cerrarDialog();
    this.dialogsService.confirmarAccion(true, 'Producto', 'eliminado correctamente', id);
  }

  eliminarEmpleado(id: number) {
    this.cerrarDialog();
    this.dialogsService.confirmarAccion(true, 'Empleado', 'eliminado correctamente', id);
  }
}
