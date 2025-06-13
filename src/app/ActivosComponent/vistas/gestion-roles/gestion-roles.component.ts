import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { roleData, RoleInterface } from '../../servicios/data/roleData';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AccessDIalogsService } from '../../servicios/access/access-dialogs.service';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GestionRolesComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'nombre',
    'descripcion',
    'permisos',
    'estado',
    'creado_en',
    'accion',
  ];
  dataSource: MatTableDataSource<RoleInterface>;
  selection = new SelectionModel<RoleInterface>(true, []);

  // Variables para modales
  showRoleModal = false;
  isEditMode = false;
  currentRoleId: number | null = null;
  showDeleteModal = false;
  roleToDelete: RoleInterface | null = null;

  // Formulario reactivo
  roleForm: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private fb: FormBuilder,
    public dialogsService: AccessDIalogsService
  ) {
    this.dataSource = new MatTableDataSource(roleData);
    this.roleForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      permisos: [[]],
      estado: [true]
    });
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

  checkboxLabel(row?: RoleInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  //sidebar menu activation start
  menuSidebarActive:boolean=false;
  myfunction(){
    this.menuSidebarActive = !this.menuSidebarActive;
  }
  //sidebar menu activation end

  addRole() {
    this.isEditMode = false;
    this.currentRoleId = null;
    this.roleForm.reset({
      estado: true,
      permisos: []
    });
    this.showRoleModal = true;
  }

  editRole(role: RoleInterface) {
    this.isEditMode = true;
    this.currentRoleId = role.id;
    this.roleForm.patchValue({
      nombre: role.nombre,
      descripcion: role.descripcion,
      permisos: [...role.permisos],
      estado: role.estado
    });
    this.showRoleModal = true;
  }

  saveRole() {
    if (this.roleForm.invalid) {
      this.roleForm.markAllAsTouched();
      return;
    }

    const formData = this.roleForm.value;

    if (this.isEditMode && this.currentRoleId) {
      // Editar rol existente
      const index = this.dataSource.data.findIndex(r => r.id === this.currentRoleId);
      if (index !== -1) {
        this.dataSource.data[index] = {
          ...this.dataSource.data[index],
          ...formData,
          id: this.currentRoleId,
          actualizado_en: new Date()
        };
      }
    } else {
      // Agregar nuevo rol
      const newId = Math.max(...this.dataSource.data.map(r => r.id), 0) + 1;
      const newRole: RoleInterface = {
        id: newId,
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        permisos: formData.permisos,
        estado: formData.estado,
        creado_en: new Date(),
        actualizado_en: new Date()
      };
      this.dataSource.data = [...this.dataSource.data, newRole];
    }

    this.dataSource._updateChangeSubscription();
    this.showRoleModal = false;
  }

  deleteRole(role: RoleInterface) {
    this.roleToDelete = role;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.roleToDelete) {
      this.dataSource.data = this.dataSource.data.filter(
        r => r.id !== this.roleToDelete!.id
      );
      this.dataSource._updateChangeSubscription();
      this.showDeleteModal = false;
      this.roleToDelete = null;
    }
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.roleToDelete = null;
  }

  toggleRoleStatus(role: RoleInterface) {
    role.estado = !role.estado;
    role.actualizado_en = new Date();
    const index = this.dataSource.data.findIndex(r => r.id === role.id);
    if (index !== -1) {
      this.dataSource.data[index] = { ...role };
      this.dataSource._updateChangeSubscription();
    }
  }

  duplicateRole(role: RoleInterface) {
    const newId = Math.max(...this.dataSource.data.map(r => r.id), 0) + 1;
    const newRole: RoleInterface = {
      ...role,
      id: newId,
      nombre: `${role.nombre} (Copia)`,
      creado_en: new Date(),
      actualizado_en: new Date()
    };
    this.dataSource.data = [...this.dataSource.data, newRole];
    this.dataSource._updateChangeSubscription();
  }

  ngOnInit(): void {}
}
