import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesDialogComponent } from './sucursales-dialog.component';

describe('SucursalesDialogComponent', () => {
  let component: SucursalesDialogComponent;
  let fixture: ComponentFixture<SucursalesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalesDialogComponent]
    });
    fixture = TestBed.createComponent(SucursalesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
