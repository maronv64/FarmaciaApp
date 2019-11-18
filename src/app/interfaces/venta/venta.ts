import { DetalleVenta } from "../detalle-venta/detalle-venta";
import { Usuario } from '../usuario/usuario';
import { EstadoVenta } from '../estado-venta/estado-venta';
export interface Venta {
    id?:string;
    idestado?:string;
    idcliente?:string;
    idcourier?:string;
    fecha?:string;
    subtotal?:string;
    total?:string;
    estado_del?:string;
    created_at?:string;
    updated_at?:string;
    nome_token?:string;
    
    estado?:EstadoVenta;
    cliente?:Usuario;
    courier?:Usuario;
    detalle?:DetalleVenta[];
}
