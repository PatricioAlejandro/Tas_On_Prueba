import { Component, OnInit } from '@angular/core';
import { FormControlValidators } from '../funciones/formcontrol';
import { MasterUrlService } from '../services/master-url.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Usuarios del Sistema";
  usuarios = [];
  constructor(private _http: HttpClient,
    private _masterURL: MasterUrlService, public validators: FormControlValidators) { }

  ngOnInit() {
    this.getAllUsers();
     console.log(this.usuarios);
  }

  getAllUsers(){
    this._http.get(this._masterURL.url + 'Users')
    .subscribe(
      (res: any) => {
         //console.log(typeof data);
         for (let i = 0; i < res.length; i++) {
          const tempUser = {
            id: res[i].id,
            nombre: res[i].nombre,
            pass: res[i].pass,
            sexo: res[i].sexo,
            edad: res[i].edad,
            resumen: res[i].resumen,
            pais: res[i].pais,
            telf: res[i].telf,
            nivel: res[i].nivel,
            deporte: res[i].deporte
          };
          this.usuarios.push(tempUser);
         }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  removeUser(id: String){
    this._http.delete(this._masterURL.url + 'Users/' + id)
    .subscribe(
      (res: any) => {
         //console.log( res);
         for (let i = 0; i < res.length; i++) {
          const tempUser = {
            id: res[i].id,
            nombre: res[i].nombre,
            pass: res[i].pass,
            sexo: res[i].sexo,
            edad: res[i].edad,
            resumen: res[i].resumen,
            pais: res[i].pais,
            telf: res[i].telf,
            nivel: res[i].nivel,
            deporte: res[i].deporte
          };
          this.usuarios = this.usuarios.filter(value => tempUser.id != value.id);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
