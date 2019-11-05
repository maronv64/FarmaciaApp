import { Venta } from "./venta";
export interface VentasResult {
    code?:string;
    message?:string;
    items?: Venta[];
}
