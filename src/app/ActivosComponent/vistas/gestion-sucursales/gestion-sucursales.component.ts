import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Branch, BRANCH_DATA } from '../../servicios/data/branchData';

@Component({
  selector: 'app-gestion-sucursales',
  templateUrl: './gestion-sucursales.component.html',
  styleUrls: ['./gestion-sucursales.component.scss'],
        encapsulation: ViewEncapsulation.None
})
export class GestionSucursalesComponent implements OnInit {
  // Propiedades para el sidebar
  menuSidebarActive: boolean = false;

  // Configuración de la tabla
  displayedColumns: string[] = [
    'select',
    'nombre',
    'direccion',
    'telefono1',
    'telefono2',
    'telefono3',
    'motel',
    'accion'
  ];
  dataSource = new MatTableDataSource<Branch>(BRANCH_DATA);
  selection = new SelectionModel<Branch>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Método para toggle del sidebar
  myfunction() {
    this.menuSidebarActive = !this.menuSidebarActive;
  }

  // Métodos para la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  checkboxLabel(row?: Branch): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  // Método para agregar sucursal
  addSucursal() {
    // Lógica para agregar sucursal
    console.log('Agregar sucursal');
  }
}
