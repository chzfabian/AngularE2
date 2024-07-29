import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    MatGridListModule,
    NgFor,
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  products=[
    {"name":"Curso de Angular", "imgSrc": "./assets/img/angular1.png", "summary":"Angular"},
    {"name":"Curso de Javascript", "imgSrc": "./assets/img/javascript1.png", "summary":"Javascript"},
    {"name":"Curso de MongoDB", "imgSrc": "./assets/img/mongodb1.png", "summary":"MongoDB"},
    {"name":"Curso de Node.js", "imgSrc": "./assets/img/node1.png", "summary":"Node.js"},
    {"name":"Curso de Php", "imgSrc": "./assets/img/php.png", "summary":"Php"},
    {"name":"Curso de MySql", "imgSrc": "./assets/img/mysql.png", "summary":"MySql"},    ]
}
