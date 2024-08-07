import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from "@angular/common/http";

/* import { routes } from './app.routes';
 */import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter( [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '', component: NavbarComponent, children: [
      { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
    ] },
    { path: '**', redirectTo: 'login', pathMatch: 'full'},
  ]) , provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideHttpClient(withFetch())]

};
