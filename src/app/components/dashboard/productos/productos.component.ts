import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    Swal,
    MatGridListModule,
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  alert(){
    Swal.fire({
      title: "Realmente quieres salir?",
      showDenyButton: true,|
      showCancelButton: true,
      confirmButtonText: "Si quiero salir",
      denyButtonText: `No quiero salir`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Guardado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No quiero ", "", "info");
      }
    });
  }
}
