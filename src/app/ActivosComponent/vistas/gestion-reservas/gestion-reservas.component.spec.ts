import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GestionReservasComponent } from './gestion-reservas.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { reservaData } from '../../servicios/data/reservaData';
import { ReservaInterface } from '../../servicios/data/reservaData';

describe('GestionReservasComponent', () => {
  let component: GestionReservasComponent;
  let fixture: ComponentFixture<GestionReservasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GestionReservasComponent],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize dataSource with reservaData', () => {
    expect(component.dataSource.data).toEqual(reservaData);
  });

  it('should have correct displayedColumns', () => {
    const expectedColumns = [
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
    expect(component.displayedColumns).toEqual(expectedColumns);
  });

  it('should apply filter correctly', () => {
    const testData = [...reservaData];
    component.dataSource.data = testData;
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'Juan';
    inputElement.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();

    expect(component.dataSource.filteredData.length).toBe(1);
    expect(component.dataSource.filteredData[0].nombreCliente).toContain('Juan');
  });

  it('should toggle all rows selection when master checkbox is clicked', () => {
    const masterCheckbox = fixture.nativeElement.querySelector('mat-checkbox');
    masterCheckbox.click();
    fixture.detectChanges();

    expect(component.selection.selected.length).toBe(component.dataSource.data.length);

    masterCheckbox.click();
    fixture.detectChanges();

    expect(component.selection.selected.length).toBe(0);
  });

  it('should open add reservation modal', () => {
    const addButton = fixture.nativeElement.querySelector('button[color="primary"]');
    addButton.click();
    fixture.detectChanges();

    expect(component.showReservaModal).toBeTrue();
    expect(component.isEditMode).toBeFalse();
  });

  it('should toggle sidebar', () => {
    const initialSidebarState = component.menuSidebarActive;
    component.toggleSidebar();
    expect(component.menuSidebarActive).toBe(!initialSidebarState);
  });

  describe('Reserva Form', () => {
    it('should be invalid when empty', () => {
      expect(component.reservaForm.valid).toBeFalse();
    });

    it('should validate required fields', () => {
      const nombreCliente = component.reservaForm.get('nombreCliente');
      const nombreCuarto = component.reservaForm.get('nombreCuarto');
      const horaInicio = component.reservaForm.get('horaInicio');
      const horaFin = component.reservaForm.get('horaFin');
      const estado = component.reservaForm.get('estado');

      expect(nombreCliente?.valid).toBeFalse();
      expect(nombreCuarto?.valid).toBeFalse();
      expect(horaInicio?.valid).toBeFalse();
      expect(horaFin?.valid).toBeFalse();
      expect(estado?.valid).toBeFalse();

      nombreCliente?.setValue('Test');
      nombreCuarto?.setValue('Test');
      horaInicio?.setValue(new Date());
      horaFin?.setValue(new Date());
      estado?.setValue('pendiente');

      expect(component.reservaForm.valid).toBeTrue();
    });
  });

  describe('Reserva Actions', () => {
    let testReserva: ReservaInterface;

    beforeEach(() => {
      testReserva = {
        id: 999,
        horaInicio: new Date(),
        horaFin: new Date(),
        detalles: 'Test',
        estado: 'pendiente',
        pagado: false,
        nombreCuarto: 'Test',
        nombreCliente: 'Test',
        creado_en: new Date(),
        actualizado_en: new Date()
      };
    });

    it('should confirm reservation', () => {
      component.confirmReserva(testReserva);
      expect(testReserva.estado).toBe('confirmada');
    });

    it('should start reservation', () => {
      testReserva.estado = 'confirmada';
      component.startReserva(testReserva);
      expect(testReserva.estado).toBe('en-curso');
    });

    it('should complete reservation', () => {
      testReserva.estado = 'en-curso';
      component.completeReserva(testReserva);
      expect(testReserva.estado).toBe('completada');
    });

    it('should cancel reservation', () => {
      component.cancelReserva(testReserva);
      expect(testReserva.estado).toBe('cancelada');
    });

    it('should toggle payment status', () => {
      const initialStatus = testReserva.pagado;
      component.togglePayment(testReserva);
      expect(testReserva.pagado).toBe(!initialStatus);
    });

    it('should update reservation when payment status changes', () => {
      const testReserva = {...reservaData[0]};
      const initialStatus = testReserva.pagado;

      component.dataSource.data = [testReserva];
      testReserva.pagado = !initialStatus;
      component.updateReserva(testReserva);

      expect(component.dataSource.data[0].pagado).toBe(!initialStatus);
      expect(component.dataSource.data[0].actualizado_en).toBeDefined();
    });

// Eliminar la prueba de togglePayment
  });

  it('should get correct estado class and name', () => {
    expect(component.getEstadoClass('pendiente')).toContain('bg-yellow-100');
    expect(component.getEstadoName('pendiente')).toBe('Pendiente');
  });

  it('should get correct payment status and class', () => {
    expect(component.getPaymentStatus(true)).toBe('Pagado');
    expect(component.getPaymentClass(false)).toContain('bg-yellow-100');
  });

  describe('Cancelation Confirmation', () => {
    let testReserva: ReservaInterface;

    beforeEach(() => {
      testReserva = {
        id: 999,
        horaInicio: new Date(),
        horaFin: new Date(),
        detalles: 'Test',
        estado: 'pendiente',
        pagado: false,
        nombreCuarto: 'Test',
        nombreCliente: 'Test',
        creado_en: new Date(),
        actualizado_en: new Date()
      };
    });

    it('should open cancel confirmation modal', () => {
      component.openCancelConfirmation(testReserva);
      expect(component.showCancelConfirmationModal).toBeTrue();
      expect(component.reservaToCancel).toEqual(testReserva);
    });

    it('should confirm cancellation', () => {
      component.openCancelConfirmation(testReserva);
      spyOn(component, 'cancelReserva');
      component.confirmCancel();

      expect(component.cancelReserva).toHaveBeenCalledWith(testReserva);
      expect(component.showCancelConfirmationModal).toBeFalse();
      expect(component.reservaToCancel).toBeNull();
    });

    it('should cancel cancellation', () => {
      component.openCancelConfirmation(testReserva);
      component.cancelCancel();

      expect(component.showCancelConfirmationModal).toBeFalse();
      expect(component.reservaToCancel).toBeNull();
    });
  });
});
