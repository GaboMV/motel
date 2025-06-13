import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRolesComponent } from './gestion-roles.component';
import {AccessDIalogsService} from "../../servicios/access/access-dialogs.service";
import {FormBuilder} from "@angular/forms";

describe('GestionRolesComponent', () => {
  let component: GestionRolesComponent;
  let fixture: ComponentFixture<GestionRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionRolesComponent],
      providers: [
        FormBuilder,
        { provide: AccessDIalogsService, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(GestionRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
