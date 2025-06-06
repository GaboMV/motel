import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoInterface, productoData } from '../../servicios/data/productData';
import { categoriaData, CategoriaInterface } from '../../servicios/data/categoryData';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GestionProductosComponent {
  displayedColumns: string[] = [
    'select',
    'nombre',
    'precio',
    'stock',
    'descripcion',
    'estado',
    'categoria_id',
    'creado_en',
    'actualizado_en',
    'accion',
  ];
  dataSource: MatTableDataSource<ProductoInterface>;
  selection = new SelectionModel<ProductoInterface>(true, []);

  categorias: CategoriaInterface[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(productoData);
    this.categorias = categoriaData;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: ProductoInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1
      }`;
  }

  menuSidebarActive: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    }
    else {
      this.menuSidebarActive = false;
    }
  }
  //sidebar menu activation end
  addPayment() {
  }

  viewPayment() {
  }

  toggleRoleStatus(role: ProductoInterface) {
    // Lógica para cambiar el estado de un rol
    role.estado = !role.estado;
    console.log('Cambiar estado del rol:', role);
  }

  ngOnInit(): void { }

  modalEditVisible = false;
  modalDeleteVisible = false;
  modalAddVisible = false;
  modalDeleteResultVisible = false;

  editingProductId: number | null = null;

  newProduct: ProductoInterface = {
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: null,
    estado: false,
    categoria_id: 0
  };

  openAddModal() {
    this.modalEditVisible = true;
  }
  openEditModal(product: ProductoInterface) {
    this.editingProductId = product.id;
    this.newProduct = { ...product }; // Copia los datos del producto a editar
    this.modalEditVisible = true;
  }
  openDeleteModal(product: ProductoInterface) {
    this.editingProductId = product.id;
    this.modalDeleteVisible = true;
  }
  openDeleteResultModal() {
    this.modalDeleteResultVisible = true;
  }

  closeAddModal() {
    this.modalAddVisible = false;
  }
  closeEditModal() {
    this.modalEditVisible = false;
  }
  closeDeleteModal() {
    this.modalDeleteVisible = false;
  }
  closeDeleteResultModal() {
    this.modalDeleteResultVisible = false;
  }

  addProduct() {
    console.log('Nuevo producto:', this.newProduct);
    this.dataSource.data.push({ ...this.newProduct, id: this.dataSource.data.length + 1 });
    this.dataSource._updateChangeSubscription(); // Actualiza la tabla
    this.closeAddModal();
  }
  saveProduct() {
    console.log('Nuevo tipo de cuarto:', this.newProduct);
    this.closeEditModal();
  }
  deleteProduct() {
    if (this.editingProductId !== null) {
      const index = this.dataSource.data.findIndex(product => product.id === this.editingProductId);
      if (index !== -1) {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription(); // Actualiza la tabla
      }
      this.closeDeleteModal();
      this.openDeleteResultModal();
    }else{
      console.error('No se pudo eliminar el producto: ID no encontrado');
      this.closeDeleteModal();
    }
  }
    
}
