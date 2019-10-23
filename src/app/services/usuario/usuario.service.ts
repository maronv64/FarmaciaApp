import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http'; // comunicacion con las apis
// import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { UsuarioResult } from 'src/app/interfaces/usuario/usuario-result';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://127.0.0.1:8000/api/v0/";
  private _headers = new HttpHeaders({'Content-Type':'application/json'});
  private _params = new HttpParams();

  getUsuario(_nome_token_user:string,_nome_token:string){
    
    let _params = new HttpParams({
      fromObject : {
        'nome_token' : _nome_token,
      }
    });

    return this.http.get<UsuarioResult>(`${this.apiUrl}usuarios_show/${_nome_token_user}`,{headers:this._headers,params:_params});
  }

}
