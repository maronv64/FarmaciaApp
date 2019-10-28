
import { DetalleVenta } from "../detalle-venta/detalle-venta";

export interface DetalleVentaResult {
    code?:string;
    message?:string;
    items?: DetalleVenta;
}
