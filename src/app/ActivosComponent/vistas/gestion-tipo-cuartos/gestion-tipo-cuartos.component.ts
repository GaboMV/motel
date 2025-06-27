import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { roomTypeData, RoomTypeInterface } from '../../servicios/data/roomTypeData';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AccessDIalogsService } from '../../servicios/access/access-dialogs.service';
import { roomData } from '../../servicios/data/roomData2';

@Component({
  selector: 'app-gestion-tipo-cuartos',
  templateUrl: './gestion-tipo-cuartos.component.html',
  styleUrls: ['./gestion-tipo-cuartos.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class GestionTipoCuartosComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'nombre',
    'descripcion',
    'precio',
    'estado',
    'creado_en',
    'accion',
  ];
  dataSource: MatTableDataSource<RoomTypeInterface>;
  selection = new SelectionModel<RoomTypeInterface>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

    constructor(public dialogsService: AccessDIalogsService) {
    // Asignamos los datos de roles a la fuente de datos
    this.dataSource = new MatTableDataSource(roomTypeData);
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

  checkboxLabel(row?: RoomTypeInterface): string {
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

 




 

  toggleRoleStatus(role: RoomTypeInterface) {
    // Lógica para cambiar el estado de un rol
    role.estado = !role.estado;
    console.log('Cambiar estado del rol:', role);
  }
modalVisible = false;

newRoom = {
  nombre: '',
  precio: null,
  descripcion: ''
};

addTipoCuarto() {
this.dialogsService.crearTipoCuarto()}
editTipoCuarto(cuarto: RoomTypeInterface) {
this.dialogsService.editarTipoCuarto(cuarto)}

 deleteTipoCuarto(cuarto: RoomTypeInterface) {
    this.dialogsService.eliminarElemento(cuarto.id, 'TipoCuarto');
  }
  ngOnInit(): void {}
}
