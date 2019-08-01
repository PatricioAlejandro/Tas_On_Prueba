import { Injectable } from '@angular/core';

@Injectable()
export class MasterUrlService {

  private _url: string;

  constructor() {
    // this._url = "https://examen-twj-chavezpatricio-patricioalejandro.c9users.io/";
    this._url = "http://localhost:8080";
  }

  get url(): string {
    return this._url;
  }

  set url(nuevoUrl: string) {
    this._url = nuevoUrl;
  }
}
