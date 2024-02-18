import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../../registro/registro.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [

    SharedModule,
    RouterModule,
    RegistroComponent,
    MatTableModule,
    CommonModule,
    MatGridListModule,
  ],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent, GridListDynamicExample {
/*   tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ]; */
}
