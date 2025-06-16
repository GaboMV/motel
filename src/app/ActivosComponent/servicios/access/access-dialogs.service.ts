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
import {CrearSucursalDialogComponent} from "../../dialogs/crear-sucursal-dialog/crear-sucursal-dialog.component";
import {EditarSucursalDialogComponent} from "../../dialogs/editar-sucursal-dialog/editar-sucursal-dialog.component";
import {Branch} from "../data/branchData";
import {CrearReservaDialogComponent} from "../../dialogs/crear-reserva-dialog/crear-reserva-dialog.component";
import {EditarReservaDialogComponent} from "../../dialogs/editar-reserva-dialog/editar-reserva-dialog.component";
import {ReservaInterface} from "../data/reservaData";
import { CuartoInterface } from '../data/roomData';
import { TransaccionInterface } from '../data/transactionData';
import { CrearLimpiezaDialogComponent } from '../../dialogs/crear-limpieza-dialog/crear-limpieza-dialog.component';
import { CrearCheckoutDialogComponent } from '../../dialogs/crear-checkout-dialog/crear-checkout-dialog.component';
import { CrearOcuparcuartoDialogComponent } from '../../dialogs/crear-ocuparcuarto-dialog/crear-ocuparcuarto-dialog.component';
import { AgregarProductoCuartoDialogComponent } from '../../dialogs/agregar-producto-cuarto-dialog/agregar-producto-cuarto-dialog.component';
import { CrearHabilitarDialogComponent } from '../../dialogs/crear-habilitar-dialog/crear-habilitar-dialog.component';
import { CrearMantenimientoDialogComponent } from '../../dialogs/crear-mantenimiento-dialog/crear-mantenimiento-dialog.component';

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

  // Acceso a los diálogos de creación, edición de sucursales
  crearSucursal(): void {
    this.dialog.open(CrearSucursalDialogComponent, {
      width: '700px'
    });
  }

  editarSucursal(branch: Branch): void {
    this.dialog.open(EditarSucursalDialogComponent, {
      width: '700px',
      data: { branch }
    });
  }

  // Acceso a los diálogos de creación, edición de reservas
  crearReserva(): void {
    this.dialog.open(CrearReservaDialogComponent, {
      width: '700px'
    });
  }

  editarReserva(reserva: ReservaInterface): void {
    this.dialog.open(EditarReservaDialogComponent, {
      width: '700px',
      data: reserva
    });
  }

  // Acceso a dialogos de dashboard
  enviarLimpieza(cuarto: CuartoInterface): void {
    this.dialog.open(CrearLimpiezaDialogComponent, {
      data: {
        error: false,
        mensaje: '¿Está seguro de que desea enviar a limpieza el cuarto ' + cuarto.nombre + '?',
        tipo: 'limpieza',
        idAux: cuarto.id
      },
    });
  }
  checkoutCuarto(cuarto: CuartoInterface): void {
    this.dialog.open(CrearCheckoutDialogComponent, {
      data: {
        cuarto,
      },
    });
  }
  ocuparCuarto(cuarto: CuartoInterface): void {
    this.dialog.open(CrearOcuparcuartoDialogComponent, {
      data: {
        cuarto,
      },
    });
  }
  agregarProductoTransaccion(): void {
    this.dialog.open(AgregarProductoCuartoDialogComponent, {
      width: '700px',
      data: {
      }
    });
  }
  habilitarCuarto(cuarto: CuartoInterface): void {
    this.dialog.open(CrearHabilitarDialogComponent, {
      data: {
        error: false,
        mensaje: '¿Está seguro de que desea habilitar el cuarto ' + cuarto.nombre + '?',
        tipo: 'limpieza',
        idAux: cuarto.id
      },
    });
  }
  enviarMantenimiento(cuarto: CuartoInterface): void {
    this.dialog.open(CrearMantenimientoDialogComponent, {
      data: {
        error: false,
        mensaje: '¿Está seguro de que desea enviar a mantenimiento el cuarto ' + cuarto.nombre + '?',
        tipo: 'limpieza',
        idAux: cuarto.id
      },
    });
  }
}
