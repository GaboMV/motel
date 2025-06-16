import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CuartoInterface } from '../../servicios/data/roomData';
import { TransaccionInterface } from '../../servicios/data/transactionData';

@Component({
  selector: 'app-crear-checkout-dialog',
  templateUrl: './crear-checkout-dialog.component.html',
  styleUrls: ['./crear-checkout-dialog.component.scss']
})
export class CrearCheckoutDialogComponent {

  productosTransaccion: any[] = [];

  cuarto: CuartoInterface = {
    id: 0,
    nombre: '',
    ocupado: '',
    estado: false,
    descripcion: null,
    sucursales_id: 0,
    tipo_cuarto_id: 0
  }

  transaccion: TransaccionInterface = {
    id: 0,
    fecha: new Date(),
    horaEntrada: new Date(),
    horaSalida: new Date(),
    ticket: '',
    nombre: '',
    cuarto: '',
    empleado: '',
    monto: '',
    estado: false
  }

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }

  checkoutCuarto() {
    // Aquí puedes implementar la lógica para ocupar un cuarto
    this._snackBar.open('Cuarto ocupado correctamente', 'Cerrar', {
      duration: 2000,
    });
    this.cerrarDialog();
  }

  get totalProductos(): number {
    return this.productosTransaccion.reduce(
      (sum, item) => sum + (item.producto.precio * item.cantidad), 0
    );
  }
}
