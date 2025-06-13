import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ReservaInterface, reservaData } from '../../servicios/data/reservaData';
import { AccessDIalogsService } from '../../servicios/access/access-dialogs.service';

@Component({
  selector: 'app-gestion-reservas',
  templateUrl: './gestion-reservas.component.html',
  styleUrls: ['./gestion-reservas.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GestionReservasComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'id',
    'nombreCliente',
    'nombreCuarto',
    'horaInicio',
    'horaFin',
    'estado',
    'pagado',
    'acciones',
    'accion'
  ];

  dataSource = new MatTableDataSource<ReservaInterface>(reservaData);
  selection = new SelectionModel<ReservaInterface>(true, []);
  menuSidebarActive = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialogsService: AccessDIalogsService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toggleSidebar() {
    this.menuSidebarActive = !this.menuSidebarActive;
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

  checkboxLabel(row?: ReservaInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  // Métodos para manejar acciones
  confirmReserva(reserva: ReservaInterface) {
    reserva.estado = 'confirmada';
    this.updateReserva(reserva);
  }

  updateReserva(reserva: ReservaInterface) {
    const index = this.dataSource.data.findIndex(r => r.id === reserva.id);
    if (index !== -1) {
      this.dataSource.data[index] = {
        ...reserva,
        actualizado_en: new Date()
      };
      this.dataSource._updateChangeSubscription();
    }
  }

  // Para el menú de acciones
  editReserva(reserva: ReservaInterface) {
    this.dialogsService.editarReserva(reserva);
  }

  deleteReserva(reserva: ReservaInterface) {
    this.dialogsService.eliminarElemento(reserva.id, 'Reserva');
  }

  addReserva() {
    this.dialogsService.crearReserva();
  }

  startReserva(reserva: ReservaInterface) {
    reserva.estado = 'en-curso';
    this.updateReserva(reserva);
  }

  completeReserva(reserva: ReservaInterface) {
    reserva.estado = 'completada';
    this.updateReserva(reserva);
  }

  cancelReserva(reserva: ReservaInterface) {
    reserva.estado = 'cancelada';
    this.updateReserva(reserva);
  }

  togglePayment(reserva: ReservaInterface) {
    reserva.pagado = !reserva.pagado;
    this.updateReserva(reserva);
  }

  getEstadoClass(estado: string): string {
    const classes = {
      'pendiente': 'bg-yellow-100 text-yellow-800',
      'confirmada': 'bg-blue-100 text-blue-800',
      'en-curso': 'bg-purple-100 text-purple-800',
      'completada': 'bg-green-100 text-green-800',
      'cancelada': 'bg-red-100 text-red-800'
    };
    return classes[estado as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  }

  getEstadoName(estado: string): string {
    const names = {
      'pendiente': 'Pendiente',
      'confirmada': 'Confirmada',
      'en-curso': 'En Curso',
      'completada': 'Completada',
      'cancelada': 'Cancelada'
    };
    return names[estado as keyof typeof names] || 'Desconocido';
  }

  getPaymentStatus(pagado: boolean): string {
    return pagado ? 'Pagado' : 'Pendiente';
  }

  getPaymentClass(pagado: boolean): string {
    return pagado ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  }

  // Agrega esta propiedad para controlar el popup de cancelación
  showCancelConfirmationModal = false;
  reservaToCancel: ReservaInterface | null = null;

// Método para abrir el popup de confirmación de cancelación
  openCancelConfirmation(reserva: ReservaInterface) {
    this.reservaToCancel = reserva;
    this.showCancelConfirmationModal = true;
  }

// Método para confirmar la cancelación
  confirmCancel() {
    if (this.reservaToCancel) {
      this.cancelReserva(this.reservaToCancel);
      this.showCancelConfirmationModal = false;
      this.reservaToCancel = null;
    }
  }

// Método para cancelar la acción de cancelación
  cancelCancel() {
    this.showCancelConfirmationModal = false;
    this.reservaToCancel = null;
  }
}
