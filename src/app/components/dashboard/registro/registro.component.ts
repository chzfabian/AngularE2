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




@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    CommonModule,
  ],

  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  listUsuarios: Usuario[] = [];


  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones',];
  dataSource!: MatTableDataSource<any>;



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService,  private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.listUsuarios = this._usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  eliminarUsuario(index: number) {
    console.log(index);

    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();


    this._snackBar.open('El usuario fue eliminado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })


  }


}
