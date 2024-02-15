import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Usuario } from '../../../interfaces/usuario';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';




@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
  ],

  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

 listUsuarios: Usuario[] = [
  {usuario: "admin", nombre: 'Abso', apellido: "Mamani", sexo: 'Masculino'},
  {usuario: "mgomez", nombre: 'Martin', apellido: "Klaus", sexo: 'Masculino'},
  {usuario: "nperez", nombre: 'Nancy', apellido: "Perez", sexo: 'Femenino'},
  {usuario: "dlucas", nombre: 'DiSteffano', apellido: "Rossi", sexo: 'Masculino'},

];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones',];
  dataSource = new MatTableDataSource(this.listUsuarios);
  constructor() {}

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
