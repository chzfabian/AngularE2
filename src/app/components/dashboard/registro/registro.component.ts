import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Usuario } from '../../../interfaces/usuario';




const listUsuarios: Usuario[] = [
  {usuario: "admin", nombre: 'Abso', apellido: "Mamani", sexo: 'Masculino'},
  {usuario: "mgomez", nombre: 'Martin', apellido: "Klaus", sexo: 'Masculino'},
  {usuario: "nperez", nombre: 'Nancy', apellido: "Perez", sexo: 'Femenino'},
  {usuario: "dlucas", nombre: 'DiSteffano', apellido: "Rossi", sexo: 'Masculino'},

];

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    SharedModule,
  ],

  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones',];
  dataSource = listUsuarios;

  constructor() {}

  ngOnInit(): void {

  }

}
