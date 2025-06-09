import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoInterface } from '../../servicios/data/productData';
import { categoriaData, CategoriaInterface } from '../../servicios/data/categoryData';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear-producto-dialog',
  templateUrl: './crear-producto-dialog.component.html',
  styleUrls: ['./crear-producto-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrearProductoDialogComponent {

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

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {
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
  ngOnInit(): void { }

}