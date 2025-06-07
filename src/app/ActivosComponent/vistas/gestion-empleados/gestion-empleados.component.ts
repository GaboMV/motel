import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employeeData, EmployeeInterface } from '../../servicios/data/employeeData';

@Component({
  selector: 'app-gestion-empleados',
  templateUrl: './gestion-empleados.component.html',
  styleUrls: ['./gestion-empleados.component.scss'],
      encapsulation: ViewEncapsulation.None
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

  // Formulario y modales
  employeeForm: FormGroup;
  showEmployeeModal = false;
  isEditMode = false;
  currentEmployeeId: number | null = null;
  showDeleteModal = false;
  employeeToDelete: EmployeeInterface | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,private fb: FormBuilder) {
    // Inicializar formulario
    this.employeeForm = this.fb.group({
      nombre: ['', Validators.required],
      ci: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono1: ['', Validators.required],
      telefono2: [''],
      estado: [true],
      rol_id: ['', Validators.required],
      sucursales_id: ['', Validators.required],
      password: ['']
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Métodos para el sidebar
  toggleSidebar() {
    this.menuSidebarActive = !this.menuSidebarActive;
  }

  // Métodos para la tabla
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

  // Métodos CRUD para empleados
  addEmployee() {
    this.isEditMode = false;
    this.currentEmployeeId = null;
    this.employeeForm.reset({
      estado: true,
      rol_id: '',
      sucursales_id: ''
    });
    this.showEmployeeModal = true;
  }

  editEmployee(employee: EmployeeInterface) {
    this.isEditMode = true;
    this.currentEmployeeId = employee.id;
    this.employeeForm.patchValue({
      nombre: employee.nombre,
      ci: employee.ci,
      email: employee.email,
      telefono1: employee.telefono1,
      telefono2: employee.telefono2 || '',
      estado: employee.estado,
      rol_id: employee.rol_id,  // Asegúrate que esto tenga valor
      sucursales_id: employee.sucursales_id,  // Asegúrate que esto tenga valor
      password: 'dummyPassword'  // Campo requerido aunque no se muestre
    });
    this.showEmployeeModal = true;
  }

  saveEmployee() {
    if (this.employeeForm.invalid) return;

    const formData = this.employeeForm.value;

    if (this.isEditMode && this.currentEmployeeId) {
      // Editar empleado existente
      const index = this.dataSource.data.findIndex(e => e.id === this.currentEmployeeId);
      if (index !== -1) {
        this.dataSource.data[index] = {
          ...this.dataSource.data[index],
          ...formData,
          id: this.currentEmployeeId,
          password: formData.password || this.dataSource.data[index].password
        };
      }
    } else {
      // Agregar nuevo empleado
      const newId = Math.max(...this.dataSource.data.map(e => e.id), 0) + 1;
      const newEmployee: EmployeeInterface = {
        ...formData,
        id: newId,
        telefono2: formData.telefono2 || undefined
      };
      this.dataSource.data = [...this.dataSource.data, newEmployee];
    }

    this.dataSource._updateChangeSubscription(); // Actualizar la tabla
    this.showEmployeeModal = false;
  }

  viewDetails(employee: EmployeeInterface) {
    console.log('Ver detalles de:', employee);
    // Aquí puedes implementar la lógica para ver detalles si es necesario
  }

  toggleEmployeeStatus(employee: EmployeeInterface) {
    employee.estado = !employee.estado;
    const index = this.dataSource.data.findIndex(e => e.id === employee.id);
    if (index !== -1) {
      this.dataSource.data[index] = { ...employee };
      this.dataSource._updateChangeSubscription();
    }
  }

  deleteEmployee(employee: EmployeeInterface) {
    this.employeeToDelete = employee;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.employeeToDelete) {
      this.dataSource.data = this.dataSource.data.filter(
        e => e.id !== this.employeeToDelete!.id
      );
      this.dataSource._updateChangeSubscription();
      this.showDeleteModal = false;
      this.employeeToDelete = null;
    }
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.employeeToDelete = null;
  }

  // Métodos auxiliares
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
}
