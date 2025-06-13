import { Injectable } from '@angular/core';
import { CrearProductoDialogComponent } from '../../dialogs/crear-producto-dialog/crear-producto-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditarProductoDialogComponent } from '../../dialogs/editar-producto-dialog/editar-producto-dialog.component';
import { ProductoInterface } from '../data/productData';
import { EliminarElementoDialogComponent } from '../../dialogs/eliminar-elemento-dialog/eliminar-elemento-dialog.component';
import { ConfirmacionDialogComponent } from '../../dialogs/confirmacion-dialog/confirmacion-dialog.component';
import { RoleInterface } from '../data/roleData';
import {CrearRolDialogComponent} from "../../dialogs/crear-rol-dialog/crear-rol-dialog.component";
import {EditarRolDialogComponent} from "../../dialogs/editar-rol-dialog/editar-rol-dialog.component";
import {CrearEmpleadoDialogComponent} from "../../dialogs/crear-empleado-dialog/crear-empleado-dialog.component";
import {EditarEmpleadoDialogComponent} from "../../dialogs/editar-empleado-dialog/editar-empleado-dialog.component";
import {EmployeeInterface} from "../data/employeeData";

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
  crearEmpleado(): void {
    this.dialog.open(CrearEmpleadoDialogComponent, {
      width: '700px'
    });
  }

  editarEmpleado(empleado: EmployeeInterface): void {
    this.dialog.open(EditarEmpleadoDialogComponent, {
      width: '700px',
      data: { empleado }
    });
  }

  // Acceso a los diálogos de creación, edición de roles
  crearRol(): void {
    this.dialog.open(CrearRolDialogComponent, {
      width: '700px'
    });
  }

  editarRol(rol: RoleInterface): void {
    this.dialog.open(EditarRolDialogComponent, {
      width: '700px',
      data: { rol }
    });
  }
}
