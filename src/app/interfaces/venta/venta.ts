import { DetalleVenta } from "../detalle-venta/detalle-venta";
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
    detalle?:DetalleVenta[];
}
