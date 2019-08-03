import { Component, OnInit } from '@angular/core';
import { MasterUrlService } from '../services/master-url.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControlValidators } from '../funciones/formcontrol';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  title = 'Usuarios';
  usuarios = [];


  constructor(private _http: HttpClient,
    private _masterURL: MasterUrlService, public validators: FormControlValidators) { }

  ngOnInit() {
    this._http.get(this._masterURL.url + 'Users')
      .subscribe(
        (data: {}) => {
          console.log(data);
          this.usuarios.push(data);
        },
        (err) => {
          console.log(err);
        }
      );
    console.log(this.usuarios);
  }

  crearUsuario(formulario: NgForm) {
    // const usuarioCrear = {
    //   'id': formulario.value.id,
    //   'resumen': formulario.value.resumen,
    //   'edad': formulario.value.edad,
    //   'sexo': formulario.value.sexo,
    //   'deporte': formulario.value.deporte,
    //   'pais': formulario.value.pais,
    //   'nombre': formulario.value.nombre,
    //   'pass': formulario.value.pass,
    //   'telf': formulario.value.telf,
    //   'nivel': formulario.value.nivel
    // };
    var params = new HttpParams();
    params = params.append('id', formulario.value.id);
    params = params.append('resumen', formulario.value.resumen);
    params = params.append('edad', formulario.value.edad);
    params = params.append('sexo', formulario.value.sexo);
    params = params.append('deporte', formulario.value.deporte);
    params = params.append('pais', formulario.value.pais);
    params = params.append('nombre', formulario.value.nombre);
    params = params.append('pass', formulario.value.pass);
    params = params.append('telf', formulario.value.telf);
    params = params.append('nivel', formulario.value.nivel);
    //console.log(usuarioCrear);
    this._http.post(this._masterURL.url + 'Users/add', { params: params }).subscribe(
      (res) => {
        // resultado del post
        //console.log(res);
      },
      (err) => {
        console.log("Ocurrio un error", err);
      },
      () => {
        console.log("Termino la función vamos a las casas")
      }
    );

  }

  createHeader() {
    var header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    header = header.set('Access-Control-Allow-Origin', '*');
    header = header.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    return header;
  }
}
