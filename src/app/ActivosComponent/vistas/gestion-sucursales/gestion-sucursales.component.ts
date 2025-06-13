import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Branch, BRANCH_DATA } from '../../servicios/data/branchData';
import { AccessDIalogsService } from '../../servicios/access/access-dialogs.service';

@Component({
  selector: 'app-gestion-sucursales',
  templateUrl: './gestion-sucursales.component.html',
  styleUrls: ['./gestion-sucursales.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GestionSucursalesComponent implements OnInit {
  menuSidebarActive: boolean = false;

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

  constructor(public dialogsService: AccessDIalogsService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Métodos del sidebar
  myfunction() {
    this.menuSidebarActive = !this.menuSidebarActive;
  }

  // Métodos de la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
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

  // Método para ver detalles
  viewDetails(branch: Branch) {
    console.log('Detalles de sucursal:', branch);
    // Implementar lógica de detalles si es necesario
  }
}
