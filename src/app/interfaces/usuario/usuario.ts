import {TipoUsuario} from "../tipo_usuario/tipo-usuario";
import { Ubicacion } from "../ubicacion/ubicacion";
export interface Usuario {
  id?:string;
  idtipo?:string;
  name?:string;
  email?:string;
  email_verified_at?:string;
  cedula?:string;
  celular?:string;
  password?:string;
  password2?:string;
  estado_del?:string;
  created_at?:string;
  updated_at?:string;
  nome_token?:string;
  tipo?:TipoUsuario;
  ubicacion?:Ubicacion[];
}
