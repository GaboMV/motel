import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { productoData, ProductoInterface } from '../../servicios/data/productData';
import { CuartoInterface, cuartoData } from '../../servicios/data/roomData';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { ReservaInterface } from '../../servicios/data/reservaData';
import { AccessDIalogsService } from '../../servicios/access/access-dialogs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardMotelComponent {
  displayedColumns: string[] = [
    'select',
    'nombre',
    'ocupado',
    'descripcion',
    'estado',
    'sucursales_id',
    'tipo_cuarto_id',
    'creado_en',
    'actualizado_en',
    'accion',
  ];
  dataSource: MatTableDataSource<CuartoInterface>;
  selection = new SelectionModel<CuartoInterface>(true, []);

  productos: ProductoInterface[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog, public accessDialogsService: AccessDIalogsService) {
    this.dataSource = new MatTableDataSource(cuartoData);
    this.productos = productoData
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

  checkboxLabel(row?: CuartoInterface): string {
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

  toggleRoleStatus(role: CuartoInterface) {
    // Lógica para cambiar el estado de un rol
    role.estado = !role.estado;
    console.log('Cambiar estado del rol:', role);
  }

  ngOnInit(): void {
    this.productosFiltrados = this.productoControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProductos(value as string))
    );
  }

  modalEditReservaVisible = false;
  modalCancelReservaVisible = false;
  modalAddProductoVisible = false;
  modalLimpiezaVisible = false;
  modalHabilitarVisible = false;
  modalOcuparVisible = false;
  modalCheckoutVisible = false;
  modalSolicitudReservaVisible = false;

  editingReservaId: number | null = null;

  reserva: any = {
    hora_inicio: '',
    hora_final: '',
    detalles: '',
    estado: true,
    cuartos_id: null,
    clientes_id: null
  };

  cliente: any = {
    nombre: '',
    camet: '',
    telefono: '',
    correo: ''
  };

  transaccion: any = {
    monto_total: 0,
    hora_entrada: '',
    hora_salida: '',
    clientes_id: null,
    cuartos_id: null,
    empleados_id: null,
    motel_id: null
  };

  openEditReservaModal(reserva?: any) {
    if (reserva) {
      this.reserva = { ...reserva };
      this.editingReservaId = reserva.id;
    } else {
      this.reserva = { estado: true };
      this.editingReservaId = null;
    }
    this.modalEditReservaVisible = true;
  }

  closeEditReservaModal() {
    this.modalEditReservaVisible = false;
  }
  
  saveReserva() {
    if (this.editingReservaId) {
      // Lógica para actualizar reserva
    } else {
      // Lógica para crear nueva reserva
    }
    this.closeEditReservaModal();
  }

  confirmCheckout() {
    this.modalCheckoutVisible = true;
  }

  confirmCancelReserva() {
    this.modalCancelReservaVisible = true;
  }

  closeCancelReservaModal() {
    this.modalCancelReservaVisible = false;
  }

  closeAddProductoModal() {
    this.modalAddProductoVisible = false;
  }

  openAddProductoModal() {
    this.modalAddProductoVisible = true;
  }

  confirmLimpieza() {
    this.modalLimpiezaVisible = true;
  }

  closeLimpiezaModal() {
    this.modalLimpiezaVisible = false;
  }

  confirmHabilitar() {
    this.modalHabilitarVisible = true;
  }

  closeHabilitarModal() {
    this.modalHabilitarVisible = false;
  }

  closeOcuparModal() {
    this.modalOcuparVisible = false;
  }

  confirmOcupar() {
    this.modalOcuparVisible = true;
  }

  closeCheckoutModal() {
    this.modalCheckoutVisible = false;
  }

  closeSolicitudReservaModal() {
    this.modalSolicitudReservaVisible = false;
  }

  confirmSolicitudReserva() {
    this.modalSolicitudReservaVisible = true;
  }

  productosTransaccion: any[] = [];
  productoControl = new FormControl();
  productosFiltrados!: Observable<ProductoInterface[]>;
  productoSeleccionado: any = null;
  cantidadProducto: number = 1;

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

  get totalProductos(): number {
    return this.productosTransaccion.reduce(
      (sum, item) => sum + (item.producto.precio * item.cantidad), 0
    );
  }

}
