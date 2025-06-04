import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { employeeData, EmployeeInterface } from '../../servicios/data/employeeData';

@Component({
  selector: 'app-gestion-empleados',
  templateUrl: './gestion-empleados.component.html',
  styleUrls: ['./gestion-empleados.component.scss']
})
export class GestionEmpleadosComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'nombre',
    'ci',
    'email',
    'telefono1',
    'telefono2',
    'estado',
    'sucursal',
    'rol',
    'accion'
  ];

  dataSource = new MatTableDataSource<EmployeeInterface>(employeeData);
  selection = new SelectionModel<EmployeeInterface>(true, []);
  menuSidebarActive = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  // Función para alternar el sidebar
  toggleSidebar() {
    this.menuSidebarActive = !this.menuSidebarActive;
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

  checkboxLabel(row?: EmployeeInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  // Métodos para empleados
  addEmployee() {
    console.log('Agregar nuevo empleado');
  }

  editEmployee(employee: EmployeeInterface) {
    console.log('Editar empleado:', employee);
  }

  viewDetails(employee: EmployeeInterface) {
    console.log('Ver detalles de:', employee);
  }

  toggleEmployeeStatus(employee: EmployeeInterface) {
    employee.estado = !employee.estado;
    console.log('Cambiar estado de:', employee);
  }

  deleteEmployee(employee: EmployeeInterface) {
    console.log('Eliminar empleado:', employee);
  }

  getRolName(rolId: number): string {
    const roles = {
      1: 'Administrador',
      2: 'Recepcionista',
      3: 'Limpieza',
      4: 'Mantenimiento',
      5: 'Seguridad'
    };
    return roles[rolId as keyof typeof roles] || 'Desconocido';
  }

  getSucursalName(sucursalId: number): string {
    const sucursales = {
      1: 'Sucursal Central',
      2: 'Sucursal Norte',
      3: 'Sucursal Sur'
    };
    return sucursales[sucursalId as keyof typeof sucursales] || 'Desconocida';
  }

  ngOnInit(): void {}
}
