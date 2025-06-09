import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionDialogComponent } from './confirmacion-dialog.component';

describe('ConfirmacionDialogComponent', () => {
  let component: ConfirmacionDialogComponent;
  let fixture: ComponentFixture<ConfirmacionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
