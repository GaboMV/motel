import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservaInterface, reservaData } from '../../servicios/data/reservaData';

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

  // Formulario y modales
  reservaForm: FormGroup;
  showReservaModal = false;
  isEditMode = false;
  currentReservaId: number | null = null;
  showDeleteModal = false;
  reservaToDelete: ReservaInterface | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder) {
    this.reservaForm = this.fb.group({
      nombreCliente: ['', Validators.required],
      carnetCliente: [''],
      nombreCuarto: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
      detalles: [''],
      estado: ['pendiente', Validators.required],
      pagado: [false]
    });
  }

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

  addReserva() {
    this.isEditMode = false;
    this.currentReservaId = null;
    this.reservaForm.reset({
      estado: 'pendiente',
      pagado: false
    });
    this.showReservaModal = true;
  }

  editReserva(reserva: ReservaInterface) {
    this.isEditMode = true;
    this.currentReservaId = reserva.id;
    this.reservaForm.patchValue({
      nombreCliente: reserva.nombreCliente,
      carnetCliente: reserva.carnetCliente || '',
      nombreCuarto: reserva.nombreCuarto,
      horaInicio: reserva.horaInicio,
      horaFin: reserva.horaFin,
      detalles: reserva.detalles || '',
      estado: reserva.estado,
      pagado: reserva.pagado
    });
    this.showReservaModal = true;
  }

  saveReserva() {
    if (this.reservaForm.invalid) return;

    const formData = this.reservaForm.value;

    if (this.isEditMode && this.currentReservaId) {
      const index = this.dataSource.data.findIndex(r => r.id === this.currentReservaId);
      if (index !== -1) {
        this.dataSource.data[index] = {
          ...this.dataSource.data[index],
          ...formData,
          id: this.currentReservaId,
          actualizado_en: new Date()
        };
      }
    } else {
      const newId = Math.max(...this.dataSource.data.map(r => r.id), 0) + 1;
      const newReserva: ReservaInterface = {
        ...formData,
        id: newId,
        creado_en: new Date(),
        actualizado_en: new Date(),
        carnetCliente: formData.carnetCliente || undefined
      };
      this.dataSource.data = [...this.dataSource.data, newReserva];
    }

    this.dataSource._updateChangeSubscription();
    this.showReservaModal = false;
  }

  confirmReserva(reserva: ReservaInterface) {
    reserva.estado = 'confirmada';
    this.updateReserva(reserva);
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

  deleteReserva(reserva: ReservaInterface) {
    this.reservaToDelete = reserva;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.reservaToDelete) {
      this.dataSource.data = this.dataSource.data.filter(
        r => r.id !== this.reservaToDelete!.id
      );
      this.dataSource._updateChangeSubscription();
      this.showDeleteModal = false;
      this.reservaToDelete = null;
    }
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.reservaToDelete = null;
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
