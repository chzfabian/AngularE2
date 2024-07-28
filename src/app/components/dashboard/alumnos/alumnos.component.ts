import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Usuario } from '../../../interfaces/usuario';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { RegistroComponent } from '../registro/registro.component';


@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    CommonModule,
    RegistroComponent,
    RouterModule,
    MatMenuModule,
  ],

  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {

}
