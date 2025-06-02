import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRolesMotelComponent } from './gestion-roles.component';

describe('GestionRolesComponent', () => {
  let component: GestionRolesMotelComponent;
  let fixture: ComponentFixture<GestionRolesMotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionRolesMotelComponent]
    });
    fixture = TestBed.createComponent(GestionRolesMotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
