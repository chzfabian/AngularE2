import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule, Routes, Router, Route } from '@angular/router';
import { RegistroComponent } from '../../registro/registro.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';




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

  rol: any[] = [
    {value: 'Director', viewValue: 'Director'},
    {value: 'Alumno', viewValue: 'Alumno'},
    {value: 'Profesor', viewValue: 'Profesor'},
    {value: 'Tutor', viewValue: 'Tutor'},
    {value: 'Secretaria', viewValue: 'Secretaria'},
    {value: '', viewValue: 'Alumno'},




  ];


  form: FormGroup;



  constructor (private fb: FormBuilder,
    private UsuarioService: UsuarioService,
    private router: Router,
    private _snackBar: MatSnackBar ) {
    this.form = this.fb.group({

    usuario: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    sexo: ['', Validators.required],
    rol: ['', Validators.required],

    })
  }

  ngOnInit(): void {
 }

   agregarUsuario() {

      const user: any = {
        usuario: this.form.value.usuario,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        sexo: this.form.value.sexo,
        rol: this.form.value.rol,
      }

      this.UsuarioService.agregarUsuario(user);
      this.router.navigate(['/dashboard/registro'])

      this._snackBar.open('El usuario fue agregado con exito!', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }

}
