
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { roomData, RoomInterface } from '../../servicios/data/roomData2';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { roleData, RoleInterface } from '../../servicios/data/roomTypeData';


@Component({
  selector: 'app-gestion-cuartos',
  templateUrl: './gestion-cuartos.component.html',
  styleUrls: ['./gestion-cuartos.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class GestionCuartosComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'nombre',
    'descripcion',
    'tipo',
    'estado',
    'creado_en',
    'accion',
  ];
  dataSource: MatTableDataSource<RoomInterface>;
  selection = new SelectionModel<RoomInterface>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog) {
    // Asignamos los datos de roles a la fuente de datos
    this.dataSource = new MatTableDataSource(roomData);
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

  checkboxLabel(row?: RoomInterface): string {
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
    // Lógica para agregar un nuevo rol
    console.log('Agregar nuevo rol');
  }
modalEditVisible = false;
  editType(role: RoomInterface) {
    this.modalEditVisible = true;
    console.log('Editar rol:', role);
  }
   closeEditType() {
    this.modalEditVisible = false;
    
  }

  duplicateRole(role: RoomInterface) {
    // Lógica para duplicar un rol
    console.log('Duplicar rol:', role);
  }

  //eliminacion de tipo cuarto
showDeleteConfirm=false;
deleteResult: boolean | null = null;
tipoSeleccionado: any = null;
  deleteType(role: RoomInterface) {
this.showDeleteConfirm=true;
    console.log('Eliminar rol:', role);
  }

  confirmDelete() {
  this.showDeleteConfirm = false;

  // Simula eliminación
  setTimeout(() => {
    const success = true; // Aquí va la lógica real
    this.deleteResult = success;

    if (success) {
      // Elimina de la fuente de datos si se usa un array
      const index = this.dataSource.data.indexOf(this.tipoSeleccionado);
      if (index !== -1) {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription(); // actualiza la tabla
      }
    }
  }, 500);
}

  toggleRoleStatus(role: RoomInterface) {
    // Lógica para cambiar el estado de un rol
    role.estado = !role.estado;
    console.log('Cambiar estado del rol:', role);
  }
modalVisible = false;

newRoom = {
  nombre: '',
  tipo: null,
  descripcion: ''
};

openModal() {
  this.modalVisible = true;
}

closeModal() {
  this.modalVisible = false;
}

saveRoom() {
  console.log('Nuevo tipo de cuarto:', this.newRoom);
  this.closeModal();
}

saveType() {
  console.log('Nuevo tipo de cuarto:', this.newRoom);
  this.closeEditType();
}

roomTypes: string[] = [];
ngOnInit(): void {
  this.roomTypes = [...new Set(roleData.map(room => room.nombre))];
}
  
  previewImage: string | ArrayBuffer | null = null;

onImageSelected(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result;
    };
    reader.readAsDataURL(file);
  }
}


}
