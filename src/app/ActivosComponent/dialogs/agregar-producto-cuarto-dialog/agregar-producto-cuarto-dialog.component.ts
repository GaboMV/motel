import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Observable, startWith, map } from 'rxjs';
import { ProductoInterface, productoData } from '../../servicios/data/productData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-producto-cuarto-dialog',
  templateUrl: './agregar-producto-cuarto-dialog.component.html',
  styleUrls: ['./agregar-producto-cuarto-dialog.component.scss']
})
export class AgregarProductoCuartoDialogComponent implements OnInit {

  productosTransaccion: any[] = [];
  productoControl = new FormControl();
  productosFiltrados!: Observable<ProductoInterface[]>;
  productoSeleccionado: any = null;
  cantidadProducto: number = 1;

  productos: ProductoInterface[] = [];

  transaccion: any = {
    monto_total: 0,
    hora_entrada: '',
    hora_salida: '',
    clientes_id: null,
    cuartos_id: null,
    empleados_id: null,
    motel_id: null
  };

  ngOnInit(): void {
    this.productosFiltrados = this.productoControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProductos(value as string))
    );
  }

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.productos = productoData
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }
  
  private _filterProductos(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(filterValue) && producto.estado
    );
  }

  onProductoSelected(event: MatAutocompleteSelectedEvent) {
    this.productoSeleccionado = this.productos.find(p => p.nombre === event.option.value);
    this.cantidadProducto = 1;
  }

  addProductoToTransaccion() {
    if (this.productoSeleccionado && this.cantidadProducto > 0) {
      const productoExistente = this.productosTransaccion.find(
        item => item.producto.id === this.productoSeleccionado.id
      );

      if (productoExistente) {
        productoExistente.cantidad += this.cantidadProducto;
      } else {
        this.productosTransaccion.push({
          transaccion_id: this.transaccion.id,
          productos_id: this.productoSeleccionado.id,
          cantidad: this.cantidadProducto,
          producto: { ...this.productoSeleccionado }
        });
      }

      // Actualizar stock localmente (deberías también actualizarlo en la base de datos)
      this.productoSeleccionado.stock -= this.cantidadProducto;

      // Resetear selección
      this.productoSeleccionado = null;
      this.productoControl.setValue('');
      this.cantidadProducto = 1;
    }
  }

}
