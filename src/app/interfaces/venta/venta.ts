import { DetalleVenta } from "../detalle-venta/detalle-venta";
import { Usuario } from '../usuario/usuario';
import { EstadoVenta } from '../estado-venta/estado-venta';
export interface Venta {
    id?:string;
    idestado?:string;
    idcliente?:string;
    idcourier?:string;
    fecha?:string;
    fecha_f?:string;
    subtotal?:string;
    total?:string;
    estado_del?:string;
    created_at?:string;
    updated_at?:string;
    nome_token?:string;

    ubicacion_descripcion?:string;
    ubicacion_latitud?:number;
    ubicacion_longitud?:number;
    
    estado?:EstadoVenta;
    cliente?:Usuario;
    courier?:Usuario;
    detalle?:DetalleVenta[];

    //locales
    nome_token_cliente?:string;
    nome_token_courier?:string;

}
