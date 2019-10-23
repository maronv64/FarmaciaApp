import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http'; // comunicacion con las apis
import { UsuarioResult } from 'src/app/interfaces/usuario/usuario-result';

// import { Usuario } from '../../interfaces/usuario';
// import { Result } from '../../interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "http://127.0.0.1:8000/api/v0/";
  private _headers = new HttpHeaders({'Content-Type':'application/json'});
  // private _params = new HttpParams();
  // private _usuario:Usuario={};
  
  
  constructor(private http:HttpClient) { }

  setlogin(_email:string,_password:string){
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
    return this.http.get<UsuarioResult>(`${this.apiUrl}login/`,{headers:this._headers,params:_params});  

                                                // params:this._params,
                                                  // responseType: 'json'
  }

}
