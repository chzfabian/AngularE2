import { Component } from '@angular/core';
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
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',

  styleUrl: './alumnos.component.css'
})


export class AlumnosComponent {
  alert(){
    Swal.fire({
      title: "Realmente quieres salir?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si quiero salir",
      denyButtonText: `No quiero salir`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Guardar!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

}


