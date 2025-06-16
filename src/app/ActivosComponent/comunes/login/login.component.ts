import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeInterface } from '../../servicios/data/employeeData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router: Router) { }

  usuario: EmployeeInterface = {
    id: 0,
    nombre: '',
    ci: '',
    email: '',
    telefono1: '',
    password: '',
    estado: true,
    rol_id: 0,
    sucursales_id: 0
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    if (this.usuario.email === 'Admin' || this.usuario.email === 'admin') {
      this.settingLocalStorage(this.usuario, 1, 1, 'es', '', 'Jose Admin');
      this.router.navigate(['/dashboardmotel']);
    }
    if (this.usuario.email === 'Empleado' || this.usuario.email === 'empleado') {
      this.settingLocalStorage(this.usuario, 2, 2, 'es', '', 'Julio Empleado');
      this.router.navigate(['/dashboardmotel']);
    }
    if (this.usuario.email === 'Cliente' || this.usuario.email === 'cliente') {
      this.settingLocalStorage(this.usuario, 3, 3, 'es', '', 'Mauricio Cliente');
      this.router.navigate(['/dashboardmotel']);
    }
  }

  settingLocalStorage(usuario: EmployeeInterface, rolId: number, userId: number, idioma: string, correo: string, nombre: string) {
    localStorage.setItem('user', JSON.stringify(usuario));
    localStorage.setItem('rolId', rolId.toString());
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('idioma', idioma);
    localStorage.setItem('correo', correo);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('isLoggedIn', 'true');
  }
}
