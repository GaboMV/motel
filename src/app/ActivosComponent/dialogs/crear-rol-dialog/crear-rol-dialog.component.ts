import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleInterface } from '../../servicios/data/roleData';

@Component({
  selector: 'app-crear-rol-dialog',
  templateUrl: './crear-rol-dialog.component.html',
  styleUrls: ['./crear-rol-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrearRolDialogComponent {
  rol: RoleInterface = {
    id: 0,
    nombre: '',
    descripcion: '',
    permisos: [],
    estado: true,
    creado_en: new Date(),
    actualizado_en: new Date()
  };

  isEditMode = false;
  permisosDisponibles = [
    { nombre: 'crear', seleccionado: false },
    { nombre: 'leer', seleccionado: false },
    { nombre: 'actualizar', seleccionado: false },
    { nombre: 'eliminar', seleccionado: false },
    { nombre: 'gestionar_usuarios', seleccionado: false },
    { nombre: 'gestionar_roles', seleccionado: false }
  ];

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CrearRolDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.isEditMode = true;
      this.rol = { ...data.rol };
      this.actualizarPermisosUI();
    }
  }

  actualizarPermisosUI() {
    this.permisosDisponibles.forEach(permiso => {
      permiso.seleccionado = this.rol.permisos.includes(permiso.nombre);
    });
  }

  actualizarPermisos() {
    this.rol.permisos = this.permisosDisponibles
      .filter(p => p.seleccionado)
      .map(p => p.nombre);
  }

  guardarRol() {
    if (!this.rol.nombre || !this.rol.descripcion) {
      this._snackBar.open('Nombre y descripción son requeridos', 'Cerrar', { duration: 2000 });
      return;
    }

    this.dialogRef.close(this.rol);
    this._snackBar.open(`Rol ${this.isEditMode ? 'actualizado' : 'creado'} correctamente`, 'Cerrar', { duration: 2000 });
  }

  cerrarDialog() {
    this.dialogRef.close();
  }
}
