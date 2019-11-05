import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";

import { DetalleVenta } from "src/app/interfaces/detalle-venta/detalle-venta";
import { DetalleVentaResult } from "src/app/interfaces/detalle-venta/detalle-venta-result";
import { DetalleVentasResult } from "src/app/interfaces/detalle-venta/detalle-ventas-result";

import { Venta } from 'src/app/interfaces/venta/venta';
import { VentaResult } from 'src/app/interfaces/venta/venta-result';
import { VentasResult } from 'src/app/interfaces/venta/ventas-result';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = "http://127.0.0.1:8000/api/v0/";
  private _headers = new HttpHeaders({'Content-Type':'application/json'});
  // private httpOptions={headers:this._headers};

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
    // return this.http.post<DetalleVentaResult>(`${this.apiUrl}detalle_ventas_store/${_nome_token_user}/`,_request,this.httpOptions);
    return this.http.post<DetalleVentaResult>(`${this.apiUrl}detalle_ventas_store/${_nome_token_user}/`,_request,{headers:this._headers});

  }

  delete(_nome_token_user:string,_request:DetalleVenta){
    // return this.http.delete<ProductoResult>()
    let _params = new HttpParams({
      fromObject : {
        'nome_token' : _request.nome_token,
      }
    });
    return this.http.delete<DetalleVentaResult>(`${this.apiUrl}detalle_ventas_delete/${_nome_token_user}/`,{headers:this._headers,params:_params});
    // let httpOptions={headers:this._headers,params:this._params};

  }

  generar_venta(_nome_token_user:string,_request:Venta){
    
    return this.http.post<VentaResult>(`${this.apiUrl}ventas_store/${_nome_token_user}/`,_request,{headers:this._headers});

  }
  generar_pedido(_nome_token_user:string,_request:Venta){
    // return this.http.put()
    return this.http.put<VentaResult>(`${this.apiUrl}ventas_generar_pedido/${_nome_token_user}/`,_request,{headers:this._headers});

  }
   
}
