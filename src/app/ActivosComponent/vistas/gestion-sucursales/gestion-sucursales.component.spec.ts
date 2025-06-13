import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessDIalogsService } from '../../servicios/access/access-dialogs.service';
import {GestionSucursalesComponent} from "./gestion-sucursales.component";

describe('GestionSucursalesComponent', () => {
  let component: GestionSucursalesComponent;
  let fixture: ComponentFixture<GestionSucursalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionSucursalesComponent],
      providers: [
        { provide: AccessDIalogsService, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(GestionSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
