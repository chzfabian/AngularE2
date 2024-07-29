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




@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatPaginator,
  ],

})


export class AlumnosComponent {
  displayedColumns: string[] = ['position', 'name', 'apellido', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  apellido: string;
  position: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Carlos', apellido: 'Hernandez', symbol: 'Alumno'},
  {position: 2, name: 'Carlos', apellido: 'Hernandez', symbol: 'Alumno'},
  {position: 3, name: 'Carlos', apellido: 'Hernandez', symbol: 'Alumno'},
  {position: 4, name: 'Carlos', apellido: 'Hernandez', symbol: 'Alumno'},
  {position: 6, name: 'Carlos', apellido: 'Hernandez', symbol: 'Alumno'},
];

