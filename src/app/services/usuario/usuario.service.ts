import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http'; // comunicacion con las apis
// import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { UsuarioResult } from 'src/app/interfaces/usuario/usuario-result';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { Ubicacion } from 'src/app/interfaces/ubicacion/ubicacion';
import { UbicacionResult } from 'src/app/interfaces/ubicacion/ubicacion-result';
import { apiUrl } from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  // private apiUrl = "http://127.0.0.1:8000/api/v0/";
  private apiUrl = apiUrl;
  // private apiUrl = "/api/v0";
  private _headers = new HttpHeaders({'Content-Type':'application/json','X-CSRF-TOKEN':'frdZQDfbjWeSItAGr8HNSvzaMEGjtat1mJm3Aqqe'});
  // private _headers = new HttpHeaders({
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // });
  private _params = new HttpParams();

  show(_nome_token_user:string,_nome_token:string){

    let _params = new HttpParams({
      fromObject : {
        'nome_token' : _nome_token,
      }
    });

    return this.http.get<UsuarioResult>(`${this.apiUrl}usuarios_show/${_nome_token_user}`,{headers:this._headers,params:_params});
  }

  hola(){
    return this.http.get<UsuarioResult>(`${this.apiUrl}hola/`,{headers:this._headers});
  }

  login(_email:string,_password:string){
    // this._usuario.password = _password;  //?email=admin@admin.com&password=adminadm${(paramers:this._params}in
    // this._params.append('email',_email);
    // this._params.append('password',_password);

    let _params = new HttpParams({
      fromObject : {
        'email' : _email,
        'password' : _password
      }
    });

    // return this.http.get<Usuario>(`${this.apiUrl}login/`,{headers:this._headers,params:_params});
    // return this.http.get<UsuarioResult>(`${this.apiUrl}hola`,{headers:this._headers,params:_params});
    return this.http.get<UsuarioResult>(`${this.apiUrl}login/`,{headers:this._headers,params:_params});

                                                // params:this._params,
                                                  // responseType: 'json'
  }

  register(_request:Usuario){
    return this.http.post<UsuarioResult>(`${this.apiUrl}register`,_request,{headers:this._headers});
  }

  ubicacion(_nome_token_user:string,_request:Ubicacion){
    return this.http.post<UbicacionResult>(`${this.apiUrl}ubicacion_store/${_nome_token_user}/`,_request,{headers:this._headers});
  }

  update(_nome_token_user:string,_request:Usuario){
    return this.http.put<UsuarioResult>(`${this.apiUrl}usuarios_update/${_nome_token_user}`,_request,{headers:this._headers})
  }

}
