import { DetalleVenta } from "../detalle-venta/detalle-venta";

export interface DetalleVentasResult {
    code?:string;
    message?:string;
    items?: DetalleVenta[];
}
