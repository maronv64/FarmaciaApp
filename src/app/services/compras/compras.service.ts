import { Injectable } from '@angular/core';

import { Venta } from 'src/app/interfaces/venta/venta';
import { VentaResult } from 'src/app/interfaces/venta/venta-result';
import { VentasResult } from 'src/app/interfaces/venta/ventas-result';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ComprasService {

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

    return this.http.get<VentasResult>(`${this.apiUrl}ventas_mi_historial_pediodos/${_nome_token_user}/`,{headers:this._headers,params:_params});
  }
}
