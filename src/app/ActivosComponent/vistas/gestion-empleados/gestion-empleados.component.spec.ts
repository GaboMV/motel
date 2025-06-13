import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmpleadosComponent } from './gestion-empleados.component';
import { AccessDIalogsService } from '../../servicios/access/access-dialogs.service';
import {MatSnackBar} from "@angular/material/snack-bar";

describe('GestionEmpleadosComponent', () => {
  let component: GestionEmpleadosComponent;
  let fixture: ComponentFixture<GestionEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEmpleadosComponent],
      providers: [
        { provide: AccessDIalogsService, useValue: {} },
        { provide: MatSnackBar, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(GestionEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
