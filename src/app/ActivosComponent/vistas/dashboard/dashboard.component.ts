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

  toggleRoleStatus(role: CuartoInterface) {
    // Lógica para cambiar el estado de un rol
    role.estado = !role.estado;
    console.log('Cambiar estado del rol:', role);
  }

  ngOnInit(): void {
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
}
