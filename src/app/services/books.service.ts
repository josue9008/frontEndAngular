import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _baseUrl: string = environment.baseUrl;

  constructor(private _http: HttpClient ) { }

  bookGetAll(){

    // return this._http.get<Seccion[]>(`${this._baseUrl}/api/secciones/seccionesGetAll`);
    return this._http.get<any>(`${this._baseUrl}/api/libros/librosGetAll`);
  }

  librosGetByPaginate(page?: number, size?: number){
    return this._http.get<any>(`${this._baseUrl}/api/libros/librosGetByPaginate?${page}&${size}`);
  }
}
