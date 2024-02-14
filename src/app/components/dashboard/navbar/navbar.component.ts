import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../interfaces/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    SharedModule,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
  export class NavbarComponent implements OnInit {
    menu: Menu[] = [];


    constructor(private _menuService: MenuService) { }

    ngOnInit(): void {
      this.cargarMenu();
    }


    cargarMenu() {
      this._menuService.getMenu().subscribe(data => {
        this.menu = data;
      })    }

}
