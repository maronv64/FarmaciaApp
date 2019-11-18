import { Venta } from "./venta";
export interface VentaResult {
    code?:string;
    message?:string;
    items?: Venta;
}
