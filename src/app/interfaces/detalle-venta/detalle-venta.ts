import { Producto } from "../producto/producto";

export interface DetalleVenta {
    id?:string;
    idventa?:string;
    idcliente?:string;
    idproducto?:string;
    precio_u?:string;
    cantidad?:string;
    subtotal?:string;
    estado_del?:string;
    nome_token?:string;
    created_at?:string;
    updated_at?:string;

    producto?:Producto;

}
