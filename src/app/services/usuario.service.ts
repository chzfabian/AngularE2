import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "admin", nombre: 'Abso', apellido: "Mamani", sexo: 'Masculino'},
    {usuario: "mgomez", nombre: 'Martin', apellido: "Klaus", sexo: 'Masculino'},
    {usuario: "nperez", nombre: 'Nancy', apellido: "Perez", sexo: 'Femenino'},
    {usuario: "dlucas", nombre: 'DiSteffano', apellido: "Rossi", sexo: 'Masculino'},
    {usuario: "jalvarez", nombre: 'manuel', apellido: "turizo", sexo: 'Masculino'},
    {usuario: "pauliD", nombre: 'mike', apellido: "tovares", sexo: 'Masculino'},
    {usuario: "dmessi", nombre: 'paulina', apellido: "cocina", sexo: 'Femenino'},

  ];


  constructor() { }

  getUsuarios() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

}
