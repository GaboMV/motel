import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoInterface } from '../../servicios/data/productData';
import { categoriaData, CategoriaInterface } from '../../servicios/data/categoryData';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-producto-dialog',
  templateUrl: './editar-producto-dialog.component.html',
  styleUrls: ['./editar-producto-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditarProductoDialogComponent implements OnInit {

  producto: ProductoInterface = {
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    estado: true,
    categoria_id: 0
  };

  categorias: CategoriaInterface[] = [];
  myControlCategorias = new FormControl('');

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public productoEditar: ProductoInterface) {
    this.categorias = categoriaData;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

  crearProducto() {
    // Aquí se implementaría la lógica para crear un producto
    this.openSnackBar('Producto creado correctamente', 'Cerrar');
    this.cerrarDialog();
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }
  ngOnInit(): void {
    if (this.productoEditar) {
      this.producto = { ...this.productoEditar };
    }
  }

}