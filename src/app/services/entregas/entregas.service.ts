import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { VentasResult } from 'src/app/interfaces/venta/ventas-result';

@Injectable({
  providedIn: 'root'
})
export class EntregasService {

  constructor(private http:HttpClient) { }

  private apiUrl = "http://127.0.0.1:8000/api/v0/";
  private _headers = new HttpHeaders({'Content-Type':'application/json'});
  private _params = new HttpParams();

  filtro(_nome_token_user:string, _value:string){
    let _params = new HttpParams({
      fromObject : {
        'value' : _value,
      }
    });

    return this.http.get<VentasResult>(`${this.apiUrl}ventas_mi_historial_entregas/${_nome_token_user}/`,{headers:this._headers,params:_params});
  }

}
