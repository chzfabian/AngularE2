import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../../registro/registro.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../../interfaces/usuario';




@Component({
  selector: 'crear-usuario-component',
  standalone: true,
  imports: [

    SharedModule,
    RouterModule,
    RegistroComponent,
    MatTableModule,
    CommonModule,
    MatGridListModule,
    MatSelectModule,
  ],
  templateUrl: './crear-usuario.component.html',
/*   styleUrl: './crear-usuario.component.css', */

})



export class CrearUsuarioComponent implements OnInit {

  sexo: any[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'},
  ];
  form: FormGroup;



  constructor (private fb: FormBuilder) {

    this.form = this.fb.group({
    usuario: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    sexo: ['', Validators.required],

    })
  }

  ngOnInit(): void {
 }

   agregarUsuario() {
      console.log(this.form);

      const user: any = {
        usuario: this.form.value.usuario,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        sexo: this.form.value.sexo,
      }

      console.log(user);
    }

}
