import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http'; // comunicacion con las apis

import { Producto } from "src/app/interfaces/producto/producto";
import { ProductoResult } from "src/app/interfaces/producto/producto-result";
import { ProductosResult } from "src/app/interfaces/producto/productos-result";


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  private apiUrl = "http://127.0.0.1:8000/api/v0/";
  private _headers = new HttpHeaders({'Content-Type':'application/json'});
  private _params = new HttpParams();
  // private httpOptions={headers:this._headers,params:};

  show(_nome_token_user:string,_request:Producto){

    let _params = new HttpParams({
      fromObject : {
        'nome_token' : _request.nome_token,
      }
    });

    return this.http.get<ProductoResult>(`${this.apiUrl}productos_show/${_nome_token_user}/`,{headers:this._headers,params:_params});  

  }


  filtro(_nome_token_user:string,_request:Producto){

    let _params = new HttpParams({
      fromObject : {
        'nome_token' : _request.nome_token,
      }
    });
    
    return this.http.get<ProductosResult>(`${this.apiUrl}productos_filtro/${_nome_token_user}/`,{headers:this._headers,params:_params});  

  }
  

}
