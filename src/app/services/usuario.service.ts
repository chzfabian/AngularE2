import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "admin", nombre: 'Fabian', apellido: "Mendoza", sexo: 'Masculino', rol: 'Director'},
    {usuario: "Pau22", nombre: 'Paolo', apellido: "Guerrero", sexo: 'Masculino', rol: 'Tutor'},
    {usuario: "mariab90", nombre: 'Maria', apellido: "Blanco", sexo: 'Femenino', rol: 'Secretaria'},
    {usuario: "torinox", nombre: 'Matheu', apellido: "Bilardi", sexo: 'Masculino', rol: 'Alumno'},
    {usuario: "coco32", nombre: 'Camilo', apellido: "Cosseti", sexo: 'Masculino', rol: 'Alumno'},
    {usuario: "demilau", nombre: 'Lautara', apellido: "Demichelis", sexo: 'Femenina', rol: 'Alumno'},
    {usuario: "jperez", nombre: 'Jhon', apellido: "Bustamente", sexo: 'Masculino', rol: 'Alumno'},
    {usuario: "jmamani", nombre: 'Jorge', apellido: "Mamani", sexo: 'Masculino', rol: 'Alumno'},
  ];


  constructor() { }

  getUsuarios() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
    if(usuario.nombre.length >= 10){
      alert("El nombre del usuario no puede tener mas de 10 caracteres");
    }else if (usuario.usuario.length >= 10){
      alert("El usuario no puede tener mas de 10 caracteres");
    }else if (usuario.apellido.length >= 15){
      alert ("El usuario no puede tener mas de 10 caracteres")
    }
    }
  }

