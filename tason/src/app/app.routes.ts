import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'usuario', component: UsuariosComponent},
//   {path: 'usuario/:idUsuario/borrachera', component: BorracheraComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
