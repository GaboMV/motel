import { Injectable } from '@angular/core';
import { CrearProductoDialogComponent } from '../../dialogs/crear-producto-dialog/crear-producto-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditarProductoDialogComponent } from '../../dialogs/editar-producto-dialog/editar-producto-dialog.component';
import { ProductoInterface } from '../data/productData';
import { EliminarElementoDialogComponent } from '../../dialogs/eliminar-elemento-dialog/eliminar-elemento-dialog.component';
import { ConfirmacionDialogComponent } from '../../dialogs/confirmacion-dialog/confirmacion-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AccessDIalogsService {

  constructor(public dialog: MatDialog) { }  

  //Funciones para eliminar
  eliminarElemento(idelemento: number, tipo: string, idAux?: number): void {
    this.dialog.open(EliminarElementoDialogComponent, {
      data: {
        idelemento,
        tipo,
        idAux
      },
    });
  }

  // Funciones para confirmar acciones
  confirmarAccion(error: boolean, tipo: string, mensaje?: string, idAux?: number): void {
    this.dialog.open(ConfirmacionDialogComponent, {
      data: {
        error,
        mensaje,
        tipo,
        idAux
      },
    });
  }

  // Acseso a los diálogos de creación, edición de productos 
  crearProducto(): void {
    this.dialog.open(CrearProductoDialogComponent, {
    });
  }
  editarProducto(producto: ProductoInterface): void {
    this.dialog.open(EditarProductoDialogComponent, {
      data: producto,
    });
  }

  // Acceso a los dialogos de creación, edición de empleados
}
