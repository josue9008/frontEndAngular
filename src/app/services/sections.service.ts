import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Seccion } from '../interfaces/seccion';


@Injectable({
  providedIn: 'root'
})
export class SectionsService {


  private _baseUrl: string = environment.baseUrl;

  constructor( private _http: HttpClient  ) { }


  seccionGetAll(){    
    return this._http.get<any>(`${this._baseUrl}/api/secciones/seccionesGetAll`);
  }

  seccionesGetByPaginate(page?: number, size?: number){
    return this._http.get<any>(`${this._baseUrl}/api/secciones/seccionesGetByPaginate?${page}&${size}`);
  }

  seccionAdd(seccion: Seccion){    
    return this._http.post<any>(`${this._baseUrl}/api/secciones/seccionPost`, seccion);
  }

  seccionGetById(id){
    return this._http.get<any>(`${this._baseUrl}/api/secciones/seccionGetById/${id}`);    
  }

  seccionUpdateById(id:any, seccion: Seccion){
    return this._http.put<any>(`${this._baseUrl}/api/secciones/seccionUpdateById/${id}`, seccion);
  }
}
