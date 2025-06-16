import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepickerInput, MatDatepickerInputEvent } from '@angular/material/datepicker';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as Papa from 'papaparse'
import { transaccionData, TransaccionInterface } from '../../servicios/data/transactionData';

//import * as Papa from 'papaparse';

@Component({
  selector: 'app-gestion-tipo-cuartos',
  templateUrl: './gestion-transacciones.component.html',
  styleUrls: ['./gestion-transacciones.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class GestionTransaccionesComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'fecha',
    'horaEntrada',
    'horaSalida',
    'ticket',
    'nombre',
    'cuarto',
    'empleado',
    'monto',
    'estado',
    'accion',
  ];
  dataSource: MatTableDataSource<TransaccionInterface>;
  selection = new SelectionModel<TransaccionInterface>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog) {
    // Asignamos los datos de roles a la fuente de datos
    this.dataSource = new MatTableDataSource(transaccionData);
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

  checkboxLabel(row?: TransaccionInterface): string {
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
  editType(role: TransaccionInterface) {
    this.modalEditVisible = true;
    console.log('Editar rol:', role);
  }
   closeEditType() {
    this.modalEditVisible = false;
    
  }

  duplicateRole(role: TransaccionInterface) {
    // Lógica para duplicar un rol
    console.log('Duplicar rol:', role);
  }

  //eliminacion de tipo cuarto
showDeleteConfirm=false;
deleteResult: boolean | null = null;
tipoSeleccionado: any = null;
  deleteType(role: TransaccionInterface) {
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

  toggleRoleStatus(role: TransaccionInterface) {
    // Lógica para cambiar el estado de un rol
    role.estado = !role.estado;
    console.log('Cambiar estado del rol:', role);
  }
modalVisible = false;

newTransaction = {
   fecha: '',
  horaEntrada:'' ,
  horaSalida: '',
  ticket: '',
  nombre: '',
  cuarto: '',
  empleado: '',
  monto: '',
  estado: ''
};

openModal() {
  this.modalVisible = true;
}

closeModal() {
  this.modalVisible = false;
}

saveRoom() {
  console.log('Nuevo tipo de cuarto:', this.newTransaction);
  this.closeModal();
}

saveType() {
  console.log('Nuevo tipo de cuarto:', this.newTransaction);
  this.closeEditType();
}

fechaSeleccionada: Date | null = null;
dataOriginal: any[] = []; // Contendrá todas las transacciones
sumaMontos: number = 0;
  ngOnInit(): void {
     this.dataOriginal = [...this.dataSource.data]; 
  this.dataSource.filterPredicate = this.customFilterPredicate();
  }
  customFilterPredicate(): (data: any, filter: string) => boolean {
  return (data: any, filter: string): boolean => {
    if (!this.fechaSeleccionada) return true;
    const fechaData = new Date(data.fecha).toDateString();
    const fechaFiltro = this.fechaSeleccionada.toDateString();
    return fechaData === fechaFiltro;
  };
}

// Aplica filtro por fecha
filtrarPorFecha(event: MatDatepickerInputEvent<Date>) {
  this.fechaSeleccionada = event.value;
  this.dataSource.filter = '' + Math.random(); 
  this.calcularSumaMontos();
}

calcularSumaMontos() {
  this.sumaMontos = this.dataSource.filteredData.reduce((acc, item) => acc + Number(item.monto), 0);
}
showCSV=false;
showPDF=false;
generarPDF() {
  this.showPDF=true;
  const doc = new jsPDF();
  const data = this.dataSource.filteredData;

  const rows = data.map(t => [
    t.fecha, t.horaEntrada, t.horaSalida, t.ticket,
    t.nombre, t.cuarto, t.empleado, t.monto
  ]);

  const totalMonto = this.sumaMontos;

  doc.text('Reporte de Transacciones', 14, 15);
  (doc as any).autoTable({
    startY: 20,
    head: [['Fecha', 'Entrada', 'Salida', 'Ticket', 'Nombre', 'Cuarto', 'Empleado', 'Monto']],
    body: rows
  });

  doc.text(`Total Monto: BOB ${totalMonto.toFixed(2)}`, 14, (doc as any).lastAutoTable.finalY + 10);

  doc.save('reporte_transacciones.pdf');
}
closePdf() {
    this.showPDF = false;
    
  }
generarCSV() {
  this.showCSV=true;
  const data = this.dataSource.filteredData;
  const csvData = data.map(t => ({
    Fecha: t.fecha,
    Entrada: t.horaEntrada,
    Salida: t.horaSalida,
    Ticket: t.ticket,
    Nombre: t.nombre,
    Cuarto: t.cuarto,
    Empleado: t.empleado,
    Monto: t.monto
  }));
const Papa = require('papaparse');
  const csv = Papa.unparse(csvData);
  const blob = new Blob([csv + `\nTotal Monto,${this.sumaMontos}`], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'reporte_transacciones.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
   closeCsv() {
    this.showCSV = false;
    
  }
 limpiarFiltros(input: HTMLInputElement): void {
  input.value = '';
  this.fechaSeleccionada = null;
  this.dataSource.data = this.dataOriginal;
  this.dataSource.filter = '' + Math.random(); // fuerza recalculo del filtro
  this.calcularSumaMontos();
}


}
