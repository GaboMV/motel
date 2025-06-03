import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { ActivosLoginComponent } from "./activos-login/activos-login.component";
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { SideMenuComponent } from './comunes/side-menu/side-menu.component';
import { CabeceraComponent } from './comunes/cabecera/cabecera.component';
import { SublevelMenuComponent } from "./comunes/side-menu/sublevel-menu.component";
import { FilterIconComponent } from "./comunes/icons/filter-icon/filter-icon.component";
import { PdfIconComponent } from "./comunes/icons/pdf-icon/pdf-icon.component";
import { CsvIconComponent } from "./comunes/icons/csv-icon/csv-icon.component";
import { PrinterIconComponent } from "./comunes/icons/printer-icon/printer-icon.component";
import { BellIconComponent } from "./comunes/icons/bell-icon/bell-icon.component";
import { EmailIconComponent } from "./comunes/icons/email-icon/email-icon.component";
import { GlobeIconComponent } from "./comunes/icons/globe-icon/globe-icon.component";
import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { ActividadUsuariosComponent } from "./vistas/actividad-usuarios/actividad-usuarios.component";
import { DashboardMotelComponent } from "./vistas/dashboard/dashboard.component";
import { GestionCuartosComponent } from "./vistas/gestion-cuartos/gestion-cuartos.component";
import { GestionEmpleadosComponent } from "./vistas/gestion-empleados/gestion-empleados.component";
import { GestionProductosComponent } from "./vistas/gestion-productos/gestion-productos.component";
import { GestionRolesComponent } from "./vistas/gestion-roles/gestion-roles.component";
import { GestionSucursalesComponent } from "./vistas/gestion-sucursales/gestion-sucursales.component";
import { GestionTipoCuartosComponent } from "./vistas/gestion-tipo-cuartos/gestion-tipo-cuartos.component";
import { GestionTransaccionesComponent } from "./vistas/gestion-transacciones/gestion-transacciones.component";

@NgModule({
  imports: [
    NgFor,
    AsyncPipe,
    MatAutocompleteModule,
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatCardModule,
    MatListModule,
    NgApexchartsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    DragDropModule,
    MatSnackBarModule,
    NgxsModule.forRoot([]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    QRCodeModule
  ],
  declarations: [
    ActivosLoginComponent,
    RecuperarPasswordComponent,
    SideMenuComponent,
    CabeceraComponent,
    SublevelMenuComponent,
    FilterIconComponent,
    PdfIconComponent,
    CsvIconComponent,
    PrinterIconComponent,
    BellIconComponent,
    EmailIconComponent,
    GlobeIconComponent,
    //Vistas para motel
    ActividadUsuariosComponent,
    DashboardMotelComponent,
    GestionCuartosComponent,
    GestionEmpleadosComponent,
    GestionProductosComponent,
    GestionRolesComponent,
    GestionSucursalesComponent,
    GestionTipoCuartosComponent,
    GestionTransaccionesComponent
  ],
})
export class ActivosProyectModule {}
