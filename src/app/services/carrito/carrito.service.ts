import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";

import { DetalleVenta } from "src/app/interfaces/detalle-venta/detalle-venta";
import { DetalleVentaResult } from "src/app/interfaces/detalle-venta/detalle-venta-result";
import { DetalleVentasResult } from "src/app/interfaces/detalle-venta/detalle-ventas-result";


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = "http://127.0.0.1:8000/api/v0/";
  private _headers = new HttpHeaders({'Content-Type':'application/json'});
  private httpOptions={headers:this._headers};

  constructor(private http:HttpClient) { }
  

  filtro(_nome_token_user:string, _value:string){
    let _params = new HttpParams({
      fromObject : {
        'value' : _value,
      }
    });

    return this.http.get<DetalleVentasResult>(`${this.apiUrl}detalle_ventas_filtro/${_nome_token_user}/`,{headers:this._headers,params:_params});
  }

  store(_nome_token_user:string,_request:DetalleVenta){
    // const httpOptions={headers:this._headers};
    return this.http.post<DetalleVentaResult>(`${this.apiUrl}detalle_ventas_store/${_nome_token_user}/`,_request,this.httpOptions);
  }
  
}
