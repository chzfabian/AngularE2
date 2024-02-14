import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
/*  DashboardComponent,
 InicioComponent,
 UsuariosComponent, */
/*  NavbarComponent, */

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatToolbarModule,
    RouterOutlet,
    NavbarComponent,
    HttpClientModule,

  ]
})
export class DashboardModule { }
