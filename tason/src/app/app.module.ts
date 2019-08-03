import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';
import { MasterUrlService } from './services/master-url.service';
import { routing } from './app.routes';
import { FormControlValidators } from './funciones/formcontrol';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    MasterUrlService,
    FormControlValidators
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
