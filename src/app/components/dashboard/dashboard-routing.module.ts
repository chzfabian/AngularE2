import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProductosComponent } from './productos/productos.component';

/* const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'Usuarios', component: UsuariosComponent },
  { path: 'Reportes', component: ReportesComponent },
  { path: 'Inicio', component: InicioComponent },
]; */

const routes: Routes = [
{ path: '', component: DashboardComponent, children: [{
  path: 'usuarios', component: UsuariosComponent },
{ path: 'inicio',   component: InicioComponent },
] },

{ path: 'reportes', component: ReportesComponent },
{ path: 'registro', component: RegistroComponent },
{ path: 'crear-usuario', component: CrearUsuarioComponent },
{ path: 'alumnos', component: AlumnosComponent },
{ path: 'productos', component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
