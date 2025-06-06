import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  // Propiedades para formularios y modales
  branchForm: FormGroup;
  showBranchModal = false;
  isEditMode = false;
  currentBranchId: number | null = null;
  showDeleteModal = false;
  branchToDelete: Branch | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder) {
    // Inicializar formulario reactivo
    this.branchForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono1: ['', Validators.required],
      telefono2: [''],
      telefono3: [''],
      motel: ['', Validators.required],
      estado: [true]
    });
  }

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

  checkboxLabel(row?: Branch): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  // Métodos CRUD para sucursales
  addSucursal() {
    this.isEditMode = false;
    this.currentBranchId = null;
    this.branchForm.reset({
      estado: true,
      telefono2: '',
      telefono3: ''
    });
    this.showBranchModal = true;
  }

  editSucursal(branch: Branch) {
    this.isEditMode = true;
    this.currentBranchId = branch.id;
    this.branchForm.patchValue({
      nombre: branch.nombre,
      direccion: branch.direccion,
      telefono1: branch.telefono1,
      telefono2: branch.telefono2 || '',
      telefono3: branch.telefono3 || '',
      motel: branch.motel,
      estado: branch.estado
    });
    this.showBranchModal = true;
  }

  saveSucursal() {
    if (this.branchForm.invalid) {
      this.branchForm.markAllAsTouched();
      return;
    }

    const formData = this.branchForm.value;

    if (this.isEditMode && this.currentBranchId) {
      // Editar sucursal existente
      const index = this.dataSource.data.findIndex(b => b.id === this.currentBranchId);
      if (index !== -1) {
        this.dataSource.data[index] = {
          ...this.dataSource.data[index],
          ...formData,
          id: this.currentBranchId
        };
      }
    } else {
      // Agregar nueva sucursal
      const newId = Math.max(...this.dataSource.data.map(b => b.id), 0) + 1;
      const newBranch: Branch = {
        id: newId,
        nombre: formData.nombre,
        direccion: formData.direccion,
        telefono1: formData.telefono1,
        telefono2: formData.telefono2 || undefined,
        telefono3: formData.telefono3 || undefined,
        motel: formData.motel,
        estado: formData.estado
      };
      this.dataSource.data = [...this.dataSource.data, newBranch];
    }

    this.dataSource._updateChangeSubscription();
    this.showBranchModal = false;
  }

  deleteSucursal(branch: Branch) {
    this.branchToDelete = branch;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.branchToDelete) {
      this.dataSource.data = this.dataSource.data.filter(
        b => b.id !== this.branchToDelete!.id
      );
      this.dataSource._updateChangeSubscription();
      this.showDeleteModal = false;
      this.branchToDelete = null;
    }
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.branchToDelete = null;
  }

  // Método para ver detalles (puedes implementarlo según necesites)
  viewDetails(branch: Branch) {
    console.log('Detalles de sucursal:', branch);
    // Aquí puedes implementar lógica adicional para mostrar detalles
  }
}
